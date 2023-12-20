import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  ChatBubbleOvalLeftEllipsisIcon,
  EyeIcon,
  ShareIcon,
} from '@heroicons/react/20/solid'

export default function PostCardHorizontal({ data }) {
  const { title, cover, createdAt, description } = data
  return (
    <div className='shadow-lg flex flex-row rounded-2xl'>
      {/* IMAGE */}
      <div className='flex-shrink-0 w-[180px] h-[240px] p-2 hidden lg:block'>
        <Image
          src={cover}
          width={0}
          height={0}
          sizes='100vw'
          alt=''
          className='w-full h-full object-cover rounded-xl '
        />
      </div>

      {/* CONTENTS */}
      <div className='p-6 flex flex-col gap-4 lg:gap-0'>
        <div className='text-xs text-gray-400 mb-4 text-right'>{createdAt}</div>
        <div className='flex flex-col gap-2 flex-grow'>
          <Link href='#' className='hover:underline'>
            <h3 className='text-sm font-medium line-clamp-1'>{title}</h3>
          </Link>
          <p className='text-sm text-gray-400 font-light line-clamp-2'>
            {description}
          </p>
        </div>

        {/* Counter */}
        <div className='flex flex-row justify-between'>
          <div className='text-xs text-gray-400 flex gap-3'>
            <div className='flex flex-row'>
              <ChatBubbleOvalLeftEllipsisIcon className='h-4 w-4 mr-1' />
              8.49k
            </div>
            <div className='flex flex-row'>
              <EyeIcon className='h-4 w-4 mr-1' />
              6.98k
            </div>
            <div className='flex flex-row'>
              <ShareIcon className='h-4 w-4 mr-1' />
              2.03k
            </div>
          </div>
          <Link
            href='#'
            className='text-sm font-semibold leading-6 text-gray-900'>
            &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
