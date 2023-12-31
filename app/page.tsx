import Games from './components/Games'
import Header from './components/Header'
import PineApple from './components/PineApple'
import Animate from '@/components/Animate'
import Stats from './components/Stats'

export default function Home() {
  return (
    <Animate>
      <main className="mt-[100px] flex flex-col justify-center items-center">
        <Header />
        <PineApple />
        <div className="my-10 flex flex-col items-center space-y-3">
          <a
            href="https://www.buymeacoffee.com/mahit"
            rel="noopener noreferrer"
            target="_blank"  
          >
            <button className="bg-[#0171E3] px-4 py-2 text-lg rounded-3xl">
              Buy
          </button>
          </a>
          <p className="text-xl lg:text-2xl px-3 text-center">From $644.99 or $54.25/mo. for 12 mo.*</p>
        </div>
        <Games />
        <Stats />
      </main>
    </Animate>
  )
}
