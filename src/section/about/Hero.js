import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='relative before:absolute before:content-["] before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-tr from-black to-black/50'>
      <Image
        src='/about/hero.jpeg'
        alt='hero about'
        sizes='100vw'
        width={0}
        height={0}
        priority
        className='object-cover h-auto w-full'
      />
      <div className='max-w-7xl m-auto px-6'>
        <div className=' absolute bottom-20'>
          <h1 className='text-green-700 text-7xl font-bold'>Who</h1>
          <h1 className='text-white text-7xl font-bold'>we are?</h1>
          <h4 className='text-white text-2xl max-w-sm mt-4'>
            Let&apos;s work together and make awesome site easily
          </h4>
        </div>
      </div>
    </div>
  )
}
