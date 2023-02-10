import { tw } from '@/lib/zwilling'
import { FunctionComponent } from 'react'

const SuperButton: FunctionComponent<{
  className?: string
  isSuper: boolean
}> = ({ className, isSuper }: { className?: string; isSuper: boolean }) => {
  return (
    <button className={className}>{isSuper ? 'Super' : 'Not so super'}</button>
  )
}
const StyledSuperButton = tw(SuperButton)`bg-blue-500 ${(p) =>
  p.isSuper ? 'text-white' : 'text-black'}`

const squareClasses = tw`h-64 w-64 flex items-center justify-center text-2xl`

const GreenBox = tw.a`${squareClasses} bg-green-500 ${'text-white'}`

const BlueBox = tw.a<{
  $active: boolean
}>`${squareClasses} bg-blue-500 ${'text-white'} ${(p) =>
  p.$active ? `ring` : 'scale-50'}`

const redBoxClasses = tw`${squareClasses} bg-red-200 ${'text-white'}`

export default function Page() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl font-bold">Hello World</div>
          <div className="text-2xl font-bold">Hello World</div>
          <div className="text-3xl font-bold">Hello World</div>

          <div className={redBoxClasses}>Red</div>
          <GreenBox>Green</GreenBox>
          <BlueBox href="#" className="mb-20" $active={true}>
            Blue
          </BlueBox>
          <SuperButton className={tw`bg-red-500`} isSuper={true} />
          <StyledSuperButton isSuper={false} />
        </div>
      </div>
    </>
  )
}
