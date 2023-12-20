import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  ChatBubbleOvalLeftEllipsisIcon,
  EyeIcon,
  ShareIcon,
} from '@heroicons/react/20/solid'

export default function PostLargeCard({ data, index }) {
  const { cover, title, createdAt, slug } = data
  const latestPostLarge = index === 0
  const latestPost = index === 1 || index === 2
  return (
    <div className={latestPostLarge ? 'lg:col-span-2 md:col-span-2' : ''}>
      <div
        className={
          latestPostLarge || latestPost
            ? 'rounded-3xl overflow-hidden relative before:absolute before:content-["] before:w-full before:h-full before:top-0 before:left-0 before:bg-gray-900/60'
            : 'shadow-lg rounded-2xl overflow-hidden'
        }>
        <Image
          src={cover}
          alt={title}
          width={0}
          height={0}
          sizes='100vw'
          className={
            latestPostLarge || latestPost
              ? 'w-full h-[360px] object-cover aspect-[3/4]'
              : 'w-full h-full object-cover aspect-[4/3]'
          }
        />
        <div
          className={
            latestPostLarge || latestPost
              ? 'absolute bottom-0 px-6 pb-6 w-full'
              : 'px-6 pt-6 pb-6'
          }>
          <div className='text-xs text-gray-400 mb-2'>{createdAt}</div>
          <Link
            href={`blog/${slug}`}
            className={`hover:underline ${
              (latestPostLarge || latestPost) && 'hover:decoration-white'
            }`}>
            <h3
              className={`text-sm font-medium line-clamp-2 h-11 capitalize ${
                latestPostLarge && 'text-xl h-[60px]'
              } ${(latestPostLarge || latestPost) && 'text-white'}`}>
              {title}
            </h3>
          </Link>
          {/* COUNTER */}
          <div
            className={`flex flex-row justify-end mt-6 text-gray-400 ${
              (latestPostLarge || latestPost) && 'text-white/60'
            }`}>
            <div className='text-xs flex gap-3'>
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
      </div>
    </div>
  )
}
