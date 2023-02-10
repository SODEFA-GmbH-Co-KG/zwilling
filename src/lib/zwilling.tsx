export const tw = new Proxy(() => ``, {
  // tw.div`text-black`
  get(target, prop, receiver) {
    const templateFunc = (strings: string[], ...expressions: any[]) => {
      const classes = prop

      if (typeof prop === 'symbol') throw new Error('Symbol is not supported')

      // TODO: replace div by prop
      // const BaseComp = 'div'
      const BaseComp = prop as 'div'

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
  // apply(target, thisArg, args) {
  //   // return args[0]
  //   const firstArg = args[0]
  //   const isArray = Array.isArray(firstArg)
  //   if (isArray) {
  //     // tw`text-black`
  //     return ``
  //   } else {
  //     // tw(SuperButton)`text-black` -->
  //     return () => styled(firstArg)``
  //   }
  // },
})

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
