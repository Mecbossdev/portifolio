import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Image from 'next/image'
import Nextcode from '../assets/codeph.svg'

export default function Home() {
  return (
    <div className="">
      <main className="grid min-h-screen grid-cols-2">
        <div className="absolute right-80 top-1/2 h-[288px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-r from-red-500 via-blue-500 to-teal-400 opacity-50 blur-full" />
        <Hero />

        <Profile />
      </main>
      <div className=" border-t border-white/10 ">
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-gray-500">
          <div className="grid grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover ">
            <div className="p-12">
              <p className="text-5xl font-bold leading-tight text-gray-50">
                Olá eu sou o Jeferson. Um desenvolvedor Front-end | Mobile
              </p>
            </div>

            <div className="flex-1">
              <div>
                <Image src={Nextcode} alt="hello" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <h1>Algumas Tecnologias </h1>
        <div className="flex flex-grow items-center justify-center gap-4">
          <Image
            src="/img/css-logo.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/img/JavaScript-logo.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/img/nodejs_logo.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/img/reactLogo.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/img/Next.js.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  )
}
