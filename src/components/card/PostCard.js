import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { LogoSimple } from '@/components/logo'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  EyeIcon,
  ShareIcon,
} from '@heroicons/react/20/solid'

export default function PostCard({ data }) {
  const { title, cover, createdAt } = data
  return (
    <div className='shadow-lg rounded-2xl overflow-hidden'>
      {/* MEDIA CARD */}
      <div className='relative'>
        <Image
          src={cover}
          alt={title}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto aspect-[3/2]'
        />

        <Image
          src='/shape-avatar.svg'
          alt=''
          width={88}
          height={36}
          className='absolute -bottom-4'
        />
        <LogoSimple
          disabledLink={true}
          className='w-8 h-8 absolute -bottom-4 left-6 '
        />
      </div>
      {/* CONTENT */}
      <div className='px-6 pt-12 pb-6'>
        <div className='text-xs text-gray-400 mb-2'>{createdAt}</div>
        <Link href='#' className='hover:underline'>
          <h3 className='text-sm font-medium line-clamp-2 h-11'>{title}</h3>
        </Link>
        <div className='mt-6 text-xs text-gray-400 flex gap-3 justify-end'>
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
      </div>
    </div>
  )
}
