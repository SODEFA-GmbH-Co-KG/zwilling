import { FunctionComponent } from 'react'

type BaseCompString = keyof JSX.IntrinsicElements
// type DivProps = JSX.IntrinsicElements['div']

type GenericComp<T extends BaseCompString> = FunctionComponent<
  JSX.IntrinsicElements[T]
>

type TemplateFunc<T extends BaseCompString> = (
  strings: TemplateStringsArray,
  ...expressions: string[]
) => GenericComp<T>

// tw`text-black`
type EzFunc = (
  strings: TemplateStringsArray,
  ...expressions: string[]
) => string

type Tw = {
  [T in BaseCompString]: TemplateFunc<T>
  // Also make it a function:
} & EzFunc

export const tw: Tw = new Proxy(() => ``, {
  // tw.div`text-black`
  get(target, prop, receiver) {
    const templateFunc = (strings: string[], ...expressions: unknown[]) => {
      if (typeof prop === 'symbol') throw new Error('Symbol is not supported')

      // Build Class String from template string
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

      const BaseComp = prop as 'div'

      const Component = ({ className, children, ...props }: any) => {
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
      // tw(SuperButton)`text-black` -->
      throw new Error('Not supported')
      // return () => styled(firstArg)``
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
