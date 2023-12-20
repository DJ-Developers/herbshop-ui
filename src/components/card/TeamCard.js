import React from 'react'
import Image from 'next/image'

import { Facebook, Instagram, Linkin, Twitter } from '@/components/icons'

export default function TeamCard({ data }) {
  const { name, role, avatar } = data
  return (
    <div className='flex flex-col justify-center items-center shadow-md rounded-2xl '>
      <p className='font-semibold mt-6 mb-1'>{name}</p>
      <p className=' text-sm font-light text-gray-400 mb-5'>{role}</p>
      <div className='px-2 w-full h-auto'>
        <Image
          src={avatar}
          alt={name}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-full object-cover rounded-lg aspect-square'
        />
      </div>

      <div className='p-6 flex flex-row gap-4'>
        <Facebook />
        <Instagram />
        <Twitter />
        <Linkin />
      </div>
    </div>
  )
}
