import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// -----------
import {
  ChevronRightIcon,
  CalendarIcon,
  EyeIcon,
  UserIcon,
  TagIcon,
} from '@heroicons/react/24/outline'

import { POST } from '@/constants'
import ContentPreview from '@/components/text-editor/ContentPreview'
import { Facebook, Linkin, Twitter } from '@/components/icons'
import SimplePostCard from '@/components/card/SimplePostCard'

const tags = [
  {
    name: 'crochet',
    slug: 'crochet',
  },
  {
    name: 'design',
    slug: 'design',
  },
  {
    name: 'fashion',
    slug: 'fashion',
  },
]

export default function SinglePost() {
  return (
    <div>
      {/* Page Title */}
      <div className='relative mb-[100px]'>
        <div className='w-full lg:h-[380px] h-[260px] relative'>
          <Image
            src='/page-title-bg.jpeg'
            alt=''
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div className='absolute top-0 bottom-0 right-0 left-0'>
          <div className='max-w-7xl mx-auto lg:px-10 px-6 h-full flex flex-col justify-center'>
            <h1 className='lg:text-5xl text-xl text-gray-900 mb-5 font-semibold'>
              Our Blog
            </h1>
            <div className='mt-3'>
              <ul className='text-sm flex flex-row items-center font-medium'>
                <li>
                  <Link
                    href='/'
                    className='text-gray-600 hover:text-gray-900 hover:underline'>
                    Home
                  </Link>
                </li>
                <ChevronRightIcon className='h-4 w-4 mx-1.5' />
                <li>
                  <Link
                    href='/blog'
                    className='text-gray-600 hover:text-gray-900 hover:underline'>
                    Blog
                  </Link>
                </li>
                <ChevronRightIcon className='h-4 w-4 mx-1.5' />
                <li>
                  <Link
                    href={`/category/${POST.category.parent.slug}`}
                    className='text-gray-600 hover:text-gray-900 hover:underline'>
                    {POST.category.parent.title}
                  </Link>
                </li>
                <ChevronRightIcon className='h-4 w-4 mx-1.5' />
                <li className=' font-semibold'>{POST.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='max-w-7xl mx-auto text-center lg:px-10'>
        <div className='mb-4'>
          <span>
            <Link href={`/category/${POST.category.parent.slug}`}>
              {POST.category.parent.title}
            </Link>
            {' / '}
            <Link href={`/category/${POST.category.slug}`}>
              {POST.category.title}
            </Link>
          </span>
        </div>
        <div className='mb-10'>
          <h1 className='lg:text-4xl text-2xl mb-4'>{POST.title}</h1>
        </div>
        <div className='mb-8'>
          <div className='w-auto lg:h-[480px] h-[360px] '>
            <Image
              src={POST.cover}
              alt={POST.title}
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-full object-cover object-center aspect-[16/9]'
            />
          </div>
        </div>
        {/*  */}
        <div className='text-sm text-gray-600 mb-6 mt-14 font-medium'>
          <span className='mr-8 inline-flex items-center justify-center'>
            <UserIcon className='w-5 h-5 mr-1' />
            By Dong Jiang
          </span>
          <span className='mr-8 inline-flex items-center justify-center'>
            <CalendarIcon className='w-5 h-5 mr-1' />
            {POST.createdAt}
          </span>

          <span className='inline-flex items-center justify-center'>
            <EyeIcon className='h-5 w-5 mr-1' />
            816 views
          </span>
        </div>
        {/*  */}
        <div className='max-w-4xl mx-auto text-left mb-16 px-6'>
          <ContentPreview data={POST.content} />
        </div>

        {/* footer post */}
        <div className='max-w-4xl mx-auto'>
          <div className='px-6 flex lg:flex-row flex-col justify-between lg:items-center pb-6 border-b mb-10 gap-y-6'>
            <div className='inline-flex'>
              <TagIcon className='w-5 h-5 mr-4' />
              <ul className='text-sm inline-flex font-medium text-gray-500'>
                {tags.map((tag, index) => (
                  <li
                    key={index}
                    className=' after:content-[","] after:mr-2 last:after:content-[""]'>
                    <Link href={tag.slug}>{tag.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='text-sm font-medium text-gray-500 inline-flex justify-end'>
              Share this post
              <div className='px-4 flex gap-3'>
                <Link
                  href='#'
                  className='hover:text-gray-900 transition-colors duration-300'>
                  <Facebook />
                </Link>
                <Link
                  href='#'
                  className='hover:text-gray-900 transition-colors duration-300'>
                  <Twitter />
                </Link>
                <Link
                  href='#'
                  className='hover:text-gray-900 transition-colors duration-300'>
                  <Linkin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* You Might Also Like*/}
      <div className='max-w-7xl mx-auto pt-10 pb-20 lg:px-10 px-6 text-center'>
        <p className='lg:text-4xl text-3xl mb-10'>You Might Also Like</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <SimplePostCard />
          <SimplePostCard />
          <SimplePostCard />
        </div>
      </div>
    </div>
  )
}
