import Image from 'next/image'
import backgrondDesktop from '@/public/images/bg-intro-desktop.png'
import Form from './components/Form'

export default function Home() {
  return (
    <div className="flex w-full min-h-screen bg-[hsl(0,100%,74%)] 
    bg-[url('../public/images/bg-intro-desktop.png')] p-8 gap-4   justify-center items-center font-Poppins">


      <div className="flex flex-col w-full text-white pl-16 pr-4 gap-4">
        <div className="font-extrabold text-4xl">Learn to code by watching others</div>
        <div className="text-white  text-xs">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</div>
      </div>
      <div className="flex flex-col gap-4 w-full pr-16 py-6">
        <div className="bg-[hsl(248,32%,49%)] p-3 rounded-lg text-center font-semibold text-white">Try it free 7 days <span>than $20/mo. thereafter</span></div>
        <Form></Form>
      </div>
    </div>

  )
}
