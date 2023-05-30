import Image from 'next/image'
import Photojf from '../assets/photojf.svg'

export default function Profile() {
  return (
    <div className="flex items-center justify-center bg-[url(../assets/bg-stars.svg)] bg-cover">
      <div className="h-[320px] w-[300px] justify-center rounded-full bg-purple-500 ">
        <Image src={Photojf} alt="perfil" />
      </div>
    </div>
  )
}
