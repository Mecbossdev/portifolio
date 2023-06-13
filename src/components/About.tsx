import Image from 'next/image'
import Nextcode from '../assets/codeph.svg'

interface AboutProps {}

export function About(props: AboutProps) {
  return (
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
  )
}
