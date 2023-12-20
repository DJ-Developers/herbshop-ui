import React from 'react'

import PageTitle from '@/components/common/PageTitle'
import SimplePostCard from '@/components/card/SimplePostCard'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Blog',
}

export default function Blog() {
  return (
    <div>
      <PageTitle title='Blog' bgImage='/page_title_blog.png' />
      <div className='max-w-7xl mx-auto lg:px-10 px-6 pt-20'>
        <div className=' grid lg:grid-cols-3 grid-cols-1 gap-8'>
          <SimplePostCard />
          <SimplePostCard />
          <SimplePostCard />
          <SimplePostCard />
          <SimplePostCard />
          <SimplePostCard />
        </div>
        <div className='w-full mt-4 mb-20 text-center '>
          <button className='px-9 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white border border-gray-900  rounded-full inline-flex items-center transition-all duration-500'>
            <PlusIcon className='w-4 h-4 mr-2 -ml-2' />
            <p className=' uppercase'>More</p>
          </button>
        </div>
      </div>
    </div>
  )
}
