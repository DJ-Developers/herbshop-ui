import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

// Hero Icons
import { CalendarIcon, EyeIcon } from '@heroicons/react/24/outline'
import { POST } from '@/constants'

export default function SimplePostCard() {
  return (
    <div>
      <div className='overflow-hidden aspect-[16/9] mb-8'>
        <Link href={POST.slug}>
          <Image
            src={POST.cover}
            alt=''
            width={0}
            height={0}
            sizes='100w'
            className='w-full h-full object-cover object-center'
          />
        </Link>
      </div>
      <div className='flex flex-col gap-4 text-left'>
        <div className='text-sm text-gray-600'>
          <span className=' mr-6 inline-flex items-center justify-center'>
            <CalendarIcon className='w-5 h-5 mr-3' />
            {POST.createdAt}
          </span>

          <span className='inline-flex items-center justify-center'>
            <EyeIcon className='h-5 w-5 mr-3' />
            816 views
          </span>
        </div>
        <h2 className='text-lg '>
          <Link href={POST.slug}>{POST.title}</Link>
        </h2>
        <p className='text-sm font-extralight leading-loose line-clamp-3 '>
          {POST.excerpt}
        </p>
      </div>
      <div className='mt-6 pb-8 text-left'>
        <Link
          href={POST.slug}
          className='uppercase tracking-widest text-sm underline decoration-gray-200 hover:decoration-black underline-offset-8  font-medium transition-all duration-500'>
          Read more
        </Link>
      </div>
    </div>
  )
}
