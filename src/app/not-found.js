'use client'

import Link from 'next/link'
import React from 'react'
import IllustratorNotFound from '@/components/illustrators/NotFound'

export default function NotFound() {
  return (
    <div className='max-w-7xl m-auto min-h-screen'>
      <div className=' m-auto max-w-sm flex flex-col justify-center pt-24 items-center text-center'>
        <h3 className='text-3xl font-bold mb-4'>Sorry, page not found!</h3>
        <p className='text-sm text-gray-600'>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </p>
        <IllustratorNotFound className='my-20 h-60' />
        <Link
          href='/'
          className='bg-green-600 text-sm font-medium text-white rounded-lg px-5 py-3'>
          Go to home
        </Link>
      </div>
    </div>
  )
}
