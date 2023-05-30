import Image from 'next/image'
import React from 'react'
import JFlogo from '../assets/jf-logo.svg'

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-[url(../assets/bg-stars.svg)] bg-cover ">
      <div className="space-y-5">
        <div className="mt-40 flex max-w-[420px] flex-col items-center justify-between space-y-1">
          <Image src={JFlogo} alt="logo" />
          <h1 className="space-y-12 text-sm font-bold">
            Seja bem vindo ao meu portifolio!
          </h1>
          <p className="text-xs leading-relaxed">
            Venha conhecer um pouco do meu trabalho.
          </p>
        </div>
      </div>
    </div>
  )
}
