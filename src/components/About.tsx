import Image from 'next/image'
import Nextcode from '../assets/codeph.svg'

export function About() {
  return (
    <div className=" border-t border-white/10">
      <div className="bg-gradient-to-r from-purple-900 via-blue-800 to-gray-500">
        <div className="container grid grid-cols-1 bg-[url(../assets/bg-stars.svg)] bg-cover md:grid-cols-2">
          <div className="p-12">
            <p className="text-3xl font-bold leading-tight text-gray-50 md:text-5xl">
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
  )
}
