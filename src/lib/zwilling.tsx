import clsx, { type ClassValue } from 'clsx'
import { type FunctionComponent, type ReactNode } from 'react'

type ClsxInput = ClassValue

type BaseCompString = keyof JSX.IntrinsicElements
// type DivProps = JSX.IntrinsicElements['div']

type GenericComp<T extends BaseCompString, PropsType> = FunctionComponent<
  JSX.IntrinsicElements[T] & PropsType
>

type TemplatePropsFunc<T extends BaseCompString, PropsType> = (
  props: PropsType & JSX.IntrinsicElements[T]
) => string

type TemplatePropsFuncEz<PropsType> = (props: PropsType) => string

// tw`text-black`
type EzFunc = (
  strings: TemplateStringsArray,
  ...expressions: ClsxInput[]
) => string

type CompStyleFunc = <PropsType extends { className?: string }>(
  comp: (props: PropsType) => ReactNode
) => (
  strings: TemplateStringsArray,
  ...expressions: (ClsxInput | TemplatePropsFuncEz<PropsType>)[]
) => FunctionComponent<PropsType>

type Tw = {
  [T in BaseCompString]: <PropsType = {}>(
    strings: TemplateStringsArray,
    ...expressions: (ClsxInput | TemplatePropsFunc<T, PropsType>)[]
  ) => GenericComp<T, PropsType>
} & EzFunc &
  CompStyleFunc

const buildClassString = ({
  templateStringArray,
  templateExpressions,
  props,
}: {
  templateStringArray: string[]
  templateExpressions: unknown[]
  props?: any
}) => {
  const x = clsx()
  let classString = ''
  for (let index = 0; index < templateStringArray.length; index++) {
    const string = templateStringArray[index]
    classString += string
    const expression = templateExpressions[index]
    if (expression) {
      const expressionResult =
        typeof expression === 'function' ? expression(props) : expression
      classString += clsx(expressionResult)
    }
  }
  return classString
}

export const tw: Tw = new Proxy(() => ``, {
  // tw.div`text-black`
  get(target, prop, receiver) {
    const templateFunc = (
      templateStringArray: string[],
      ...templateExpressions: unknown[]
    ) => {
      if (typeof prop === 'symbol') throw new Error('Symbol is not supported')

      const BaseComp = prop as 'div'

      const Component = ({ className, children, ...props }: any) => {
        // TODO: useMemo?
        const classString = buildClassString({
          templateStringArray,
          templateExpressions,
          props,
        })

        return (
          <BaseComp className={clsx(classString, className)}>
            {children}
          </BaseComp>
        )
      }

      return Component
    }

    return templateFunc
  },
  apply(target, thisArg, args) {
    // return args[0]
    const firstArg = args[0]
    const isArray = Array.isArray(firstArg)
    if (isArray) {
      // tw`text-black`
      const [templateStringArray, ...templateExpressions] = args
      const classString = buildClassString({
        templateStringArray,
        templateExpressions,
      })
      return classString
    } else {
      // tw(SuperButton)`text-black`
      const Comp = firstArg as FunctionComponent<{
        className: string
        children?: ReactNode
      }>

      const templateFunc = (
        templateStringArray: string[],
        ...templateExpressions: unknown[]
      ) => {
        const StyledComp = ({
          className,
          children,
          ...props
        }: {
          className: string
          children?: ReactNode
        }) => {
          // TODO: useMemo?
          // Build Class String from template string
          const classString = buildClassString({
            templateStringArray,
            templateExpressions,
            props,
          })

          return (
            <Comp className={clsx(classString, className)} {...props}>
              {children}
            </Comp>
          )
        }
        return StyledComp
      }

      return templateFunc
    }
  },
}) as any
