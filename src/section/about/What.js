import React from 'react'
import Image from 'next/image'

export default function What() {
  return (
    <div className='max-w-7xl m-auto px-6 py-32'>
      <div className='grid grid-cols-2 gap-x-6'>
        <div className='grid grid-cols-2 gap-x-6 items-center pr-14 pl-3'>
          <Image
            src='/about/what_2.jpeg'
            sizes='100vw'
            alt=''
            width={0}
            height={0}
            className=' w-full h-auto rounded-2xl aspect-square'
          />
          <Image
            src='/about/what_1.jpeg'
            width={0}
            height={0}
            sizes='100vw'
            alt=''
            className='w-full h-auto rounded-2xl'
          />
        </div>
        <div>
          <h2 className='text-5xl font-bold mb-6'>Work with us</h2>
          <p className='text-gray-600'>
            Our theme is the most advanced and user-friendly theme you will find
            on the market, we have documentation and video to help set your site
            really easily, pre-installed demos you can import in one click and
            everything from the theme options to page content can be edited from
            the front-end. This is the theme you are looking for.
          </p>
        </div>
      </div>
    </div>
  )
}
