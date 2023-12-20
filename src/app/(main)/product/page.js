import React from 'react'

import SearchBar from '@/components/SearchBar'
import SortBy from '@/components/SortBy'
import Filter from '@/components/Filter'
import PageTitle from '@/components/common/PageTitle'
import { PRODUCTS } from '@/constants/index'
import ProductCard from '@/components/card/ProductCard'
import { ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const productSortBy = [
  {
    name: 'Newest',
  },
  {
    name: 'Featured',
  },
  {
    name: 'Price: High - Low',
  },
  {
    name: 'Price: Low - High',
  },
]

export const metadata = {
  title: 'Shop',
}

export default function Shop() {
  return (
    <div>
      {/* Page Title */}
      <div className='relative '>
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
        <div className='absolute inset-0'>
          <div className='max-w-7xl mx-auto lg:px-10 px-6 h-full flex flex-col justify-center'>
            <h1 className='lg:text-5xl text-xl text-gray-900 mb-5 font-semibold'>
              Shop
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
                    href='/product'
                    className='text-gray-600 hover:text-gray-900 hover:underline'>
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=' border-b border-b-gray-200'>
        <div className='max-w-7xl mx-auto lg:px-10 px-6'>
          <div className='flex justify-between items-center h-20'>
            <div></div>
            <div className='flex justify-end gap-4'>
              <SortBy data={productSortBy} />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto lg:px-10 px-6 py-20'>
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-8'>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='w-full mt-16 mb-20 text-center '>
          <button className='px-9 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white border border-gray-900  rounded-full inline-flex items-center transition-all duration-500'>
            <PlusIcon className='w-4 h-4 mr-2 -ml-2' />
            <p className=' uppercase'>More</p>
          </button>
        </div>
      </div>
    </div>
  )
}
