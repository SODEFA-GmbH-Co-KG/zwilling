import { type FunctionComponent, type ReactNode } from 'react'

export function Zwilling<ClassNamesInput = string>({
  classNameJoiner = (classNames: ClassNamesInput[]) => classNames.join(' '),
}: {
  classNameJoiner?: (classNames: ClassNamesInput[]) => string
} = {}) {
  type BaseCompString = keyof JSX.IntrinsicElements
  // type DivProps = JSX.IntrinsicElements['div']

  type GenericComp<T extends BaseCompString, PropsType> = FunctionComponent<
    Omit<JSX.IntrinsicElements[T] & PropsType, 'className'> & {
      className?: ClassNamesInput
    }
  >

  type TemplatePropsFunc<T extends BaseCompString, PropsType> = (
    props: PropsType & JSX.IntrinsicElements[T]
  ) => string

  type TemplatePropsFuncEz<PropsType> = (props: PropsType) => string

  // zw`text-black`
  type EzFunc = (
    strings: TemplateStringsArray,
    ...expressions: ClassNamesInput[]
  ) => string

  type CompStyleFunc = <PropsType extends { className?: string }>(
    comp: (props: PropsType) => ReactNode
  ) => (
    strings: TemplateStringsArray,
    ...expressions: (ClassNamesInput | TemplatePropsFuncEz<PropsType>)[]
  ) => FunctionComponent<PropsType>

  type Zw = {
    [T in BaseCompString]: (<PropsType = {}>(
      strings: TemplateStringsArray,
      ...expressions: (ClassNamesInput | TemplatePropsFunc<T, PropsType>)[]
    ) => GenericComp<T, PropsType>) &
      (<PropsType = {}>() => GenericComp<T, PropsType>) &
      (<PropsType = {}>(
        func:
          | ClassNamesInput
          | ((props: PropsType & JSX.IntrinsicElements[T]) => ClassNamesInput)
      ) => GenericComp<T, PropsType>)
  } & EzFunc &
    CompStyleFunc

  const buildClassString = ({ args, props }: { args: any[]; props?: any }) => {
    const [firstArg, ...otherArgs] = args

    // zw.a()
    if (!firstArg) return ''

    // zw.a(props => props.href && 'underline')
    if (typeof firstArg === 'function') {
      return classNameJoiner(firstArg(props))
    }

    // zw.a('text-black')
    if (!otherArgs.length) return classNameJoiner(firstArg)

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
        classString += classNameJoiner(expressionResult)
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
          <BaseComp className={classNameJoiner([classString, className])}>
            {children}
          </BaseComp>
        )
      }
      return Component
    }
    return templateFunc
  }

  const zw: Zw = new Proxy(() => ``, {
    // zw.div`text-black`
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
        // zw`text-black`
        const classString = buildClassString({
          args,
        })
        return classString
      } else {
        // zw(SuperButton)`text-black`
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

  return zw
}
