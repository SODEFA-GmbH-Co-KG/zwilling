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
  [T in BaseCompString]: (<PropsType = {}>(
    strings: TemplateStringsArray,
    ...expressions: (ClsxInput | TemplatePropsFunc<T, PropsType>)[]
  ) => GenericComp<T, PropsType>) &
    // (<PropsType = {}>() => GenericComp<T, PropsType>) &
    // (<PropsType = {}>(classes: ClsxInput) => GenericComp<T, PropsType>) &
    (<PropsType = {}>(
      func:
        | ClsxInput
        | ((props: PropsType & JSX.IntrinsicElements[T]) => ClsxInput)
    ) => GenericComp<T, PropsType>)
} & EzFunc &
  CompStyleFunc

const buildClassString = ({ args, props }: { args: any[]; props?: any }) => {
  const [firstArg, ...otherArgs] = args

  if (typeof firstArg === 'function') {
    return clsx(firstArg(props))
  }

  // tw.a(['bg-purple-500', { 'rotate-45': true }])
  if (!otherArgs.length) return clsx(firstArg)

  const templateStringArray: string[] = firstArg
  const templateExpressions: unknown[] = otherArgs
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

const buildTemplateFunc = ({ BaseComp }: { BaseComp: any }) => {
  const templateFunc = (...args: any[]) => {
    const Component = ({ className, children, ...props }: any) => {
      // TODO: useMemo?
      const classString = buildClassString({
        args,
        props,
      })

      return (
        <BaseComp className={clsx(classString, className)}>{children}</BaseComp>
      )
    }
    return Component
  }
  return templateFunc
}

export const tw: Tw = new Proxy(() => ``, {
  // tw.div`text-black`
  get(_target, prop, _receiver) {
    if (typeof prop === 'symbol') throw new Error('Symbol is not supported')
    const BaseComp = prop as BaseCompString

    return buildTemplateFunc({
      BaseComp,
    })
  },
  apply(_target, _thisArg, args) {
    const firstArg = args[0]
    const isArray = Array.isArray(firstArg)
    if (isArray) {
      // tw`text-black`
      const classString = buildClassString({
        args,
      })
      return classString
    } else {
      // tw(SuperButton)`text-black`
      const BaseComp = firstArg as FunctionComponent<{
        className: string
        children?: ReactNode
      }>

      return buildTemplateFunc({
        BaseComp,
      })
    }
  },
}) as any
