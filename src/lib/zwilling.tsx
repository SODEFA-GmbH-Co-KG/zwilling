import { FunctionComponent, ReactNode } from 'react'

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
  ...expressions: string[]
) => string

type CompStyleFunc = <PropsType>(
  comp: (props: PropsType) => ReactNode
) => (
  strings: TemplateStringsArray,
  ...expressions: (string | TemplatePropsFuncEz<PropsType>)[]
) => FunctionComponent<PropsType>

type Tw = {
  [T in BaseCompString]: <PropsType = {}>(
    strings: TemplateStringsArray,
    ...expressions: (string | TemplatePropsFunc<T, PropsType>)[]
  ) => GenericComp<T, PropsType>
} & EzFunc &
  CompStyleFunc

export const tw: Tw = new Proxy(() => ``, {
  // tw.div`text-black`
  get(target, prop, receiver) {
    const templateFunc = (strings: string[], ...expressions: unknown[]) => {
      if (typeof prop === 'symbol') throw new Error('Symbol is not supported')

      const BaseComp = prop as 'div'

      const Component = ({ className, children, ...props }: any) => {
        // TODO: useMemo?
        // Build Class String from template string
        let classString = ''
        for (let index = 0; index < strings.length; index++) {
          const string = strings[index]
          classString += string
          const expression = expressions[index]
          if (expression) {
            if (typeof expression === 'string') {
              classString += ` ${expression}`
            } else if (typeof expression === 'function') {
              const expressionResult = expression(props)
              if (typeof expressionResult === 'string') {
                classString += ` ${expressionResult}`
              } else {
                throw new Error(
                  `Expression with type ${typeof expressionResult} is not supported`
                )
              }
            } else {
              throw new Error(
                `Expression with type ${typeof expression} is not supported`
              )
            }
          }
        }

        return (
          <BaseComp className={[classString, className].join(' ')}>
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
      const [strings, ...expressions] = args
      let classString = ''
      for (let index = 0; index < strings.length; index++) {
        const string = strings[index]
        classString += string
        const expression = expressions[index]
        if (expression) {
          if (typeof expression === 'string') {
            classString += ` ${expression}`
          } else {
            throw new Error(
              `Expression with type ${typeof expression} is not supported`
            )
          }
        }
      }
      return classString
    } else {
      // tw(SuperButton)`text-black`
      const Comp = firstArg as FunctionComponent<{ className: string }>

      const templateFunc = (strings: string[], ...expressions: unknown[]) => {
        const StyledComp = ({ className, ...props }: { className: string }) => {
          // TODO: useMemo?
          // Build Class String from template string
          let classString = ''
          for (let index = 0; index < strings.length; index++) {
            const string = strings[index]
            classString += string
            const expression = expressions[index]
            if (expression) {
              if (typeof expression === 'string') {
                classString += ` ${expression}`
              } else if (typeof expression === 'function') {
                const expressionResult = expression(props)
                if (typeof expressionResult === 'string') {
                  classString += ` ${expressionResult}`
                } else {
                  throw new Error(
                    `Expression with type ${typeof expressionResult} is not supported`
                  )
                }
              } else {
                throw new Error(
                  `Expression with type ${typeof expression} is not supported`
                )
              }
            }
          }

          return (
            <Comp className={[classString, className].join(' ')} {...props} />
          )
        }
        return StyledComp
      }

      return templateFunc
    }
  },
}) as any

// File A
// const SmallTextStyles = `text-sm text-gray-500`
// const SmallTextStyles = `text-lg text-gray-500`
// const SmallTextStyles = `text-sm text-gray-500`
// const SmallTextStyles = `text-sm text-gray-500`
// const SmallTextStyles = `text-sm text-gray-500`
// const SmallTextStyles = `text-sm text-gray-500`
// const SmallTextStyles = `text-sm text-gray-500`

// File B
// const Comp = () => {
//   return <div className={SmallTextStyles}></div>
// }
