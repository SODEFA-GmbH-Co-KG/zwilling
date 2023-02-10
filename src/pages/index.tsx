import { tw } from '@/lib/zwilling'

const BlueBox = tw.div`h-20 w-64 bg-blue-500 ${'text-white'}`

export default function Page() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl font-bold">Hello World</div>
          <div className="text-2xl font-bold">Hello World</div>
          <div className="text-3xl font-bold">Hello World</div>

          <div className="h-20 w-64 bg-red-200">Red</div>
          <BlueBox>Blue</BlueBox>
        </div>
      </div>
    </>
  )
}
