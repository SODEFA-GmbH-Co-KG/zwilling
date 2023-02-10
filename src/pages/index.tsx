import { tw } from '@/lib/zwilling'

const squareClasses = tw`h-64 w-64 flex items-center justify-center text-2xl`

const BlueBox = tw.a`${squareClasses} bg-blue-500 ${'text-white'} ${(p) =>
  p.href ? `ring` : 'scale-50'}`

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
          <BlueBox href="#" className="rotate-45">
            Blue
          </BlueBox>
        </div>
      </div>
    </>
  )
}
