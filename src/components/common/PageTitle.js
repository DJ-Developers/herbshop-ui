import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function PageTitle({ title, bgImage = '/page-title-bg.jpeg' }) {
  return (
    <div className='relative lg:h-[380px] h-[260px]'>
      <Image
        src={bgImage}
        alt=''
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-full object-cover object-center'
      />
      <div className=' absolute top-0 left-0 bottom-0 right-0'>
        <div className='max-w-7xl mx-auto lg:px-10 px-6  h-full flex flex-col justify-center '>
          <div className=''>
            <h1 className='lg:text-5xl text-xl text-gray-900 mb-5 lg:font-semibold font-medium'>
              {title}
            </h1>
            <div className='mt-3'>
              <ul className='lg:text-sm text-xs flex flex-row items-center'>
                <li>
                  <Link
                    href='/'
                    className='text-gray-600 hover:text-gray-900 hover:underline'>
                    Home
                  </Link>
                </li>
                <ChevronRightIcon className='h-4 w-4 mx-1.5' />
                <li className=' font-semibold'>{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
