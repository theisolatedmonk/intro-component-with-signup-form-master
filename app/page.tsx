import Image from 'next/image'
import backgrondDesktop from '@/public/images/bg-intro-desktop.png'
import Form from './components/Form'

export default function Home() {
  return (
    <div className="flex w-full h-screen bg-[hsl(0,100%,74%)]">
      <div className="h-full flex gap-2">
        <Image src={backgrondDesktop} alt={''} className='absolute h-full' />
        <div className="flex flex-col">
          <div className="">Learn to code by watching others</div>
          <div className="">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</div>
        </div>
        <div className="flex flex-col">
          <div className="">Try it free 7 days <span>than $20/mo. thereafter</span></div>
          <Form></Form>
        </div>
      </div>
    </div>
  )
}
