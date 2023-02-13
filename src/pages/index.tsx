import { zw } from '@/lib/zwilling'
import styled from 'styled-components'

const SuperButton = ({
  className,
  isSuper,
}: {
  className?: string
  isSuper: boolean
}) => {
  return (
    <button className={className}>{isSuper ? 'Super' : 'Not so super'}</button>
  )
}
const StyledSuperButton = zw(SuperButton)`bg-blue-500 ${(p) =>
  p.isSuper && 'text-white'}`

const squareClasses = zw`h-64 w-64 flex items-center justify-center text-2xl}`

const GreenBox = zw.a`${squareClasses} bg-green-500 ${'text-white'}`

const BlueBox = zw.a<{
  $active: boolean
}>`${squareClasses} bg-blue-500 ${'text-white'} ${(p) =>
  p.$active ? `ring` : 'scale-50'}`

const redBoxClasses = zw`${squareClasses} bg-red-200 ${'text-white'}`

const PurpleBox = zw.a<{ $active: boolean }>((props) => [
  squareClasses,
  props.$active ? 'bg-purple-300' : 'bg-purple-500',
])
const PurpleBox2 = zw.a([squareClasses, 'bg-purple-500', { 'rotate-45': true }])
const PurpleBox3 = zw.a()
const PurpleBox4 = styled(PurpleBox2)`
  text-decoration: underline;
`
const PurpleBox5 = styled(
  zw.a([squareClasses, 'bg-purple-500', { 'rotate-45': true }])
)`
  text-decoration: underline;
`

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
          <SuperButton className={zw`bg-red-500`} isSuper={true} />
          <StyledSuperButton isSuper={true} />
          <PurpleBox href="#" className="mb-20" $active={true}>
            Purple1
          </PurpleBox>
          <PurpleBox2 href="#" className="mb-20">
            Purple2
          </PurpleBox2>
          <PurpleBox3
            href="#"
            className={{ 'bg-purple-800 text-white mb-20': true }}
          >
            Purple2
          </PurpleBox3>
          <PurpleBox4>Purple 44</PurpleBox4>
          <PurpleBox5>Purple 5</PurpleBox5>
        </div>
      </div>
    </>
  )
}
