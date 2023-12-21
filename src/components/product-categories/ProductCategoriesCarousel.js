import React from 'react'

// -------------
import Image from 'next/image'
import Link from 'next/link'

// --------------

const PRODUCT_CATEGORIES = [
  {
    title: 'Gift ideas',
    imageURL: '/bg-category-4.jpeg',
    slug: '/product-category/gift-ideas',

    countProduct: '18',
  },
  {
    title: 'Home Decor',
    imageURL: '/bg-category-3.jpeg',
    slug: '/product-category/home-decor',

    countProduct: '16',
  },
  {
    title: 'Kids & Babies',
    imageURL: '/bg-category-2.jpeg',
    slug: '/product-category/kids-babies',
    countProduct: '6',
  },
]

export default function ProductCategoriesCarousel() {
  return (
    <div className='max-w-7xl mx-auto px-6'>
      <div className='flex lg:flex-row flex-col'>
        {PRODUCT_CATEGORIES.map((item, index) => (
          <div className='lg:w-1/3 lg:px-6 lg:py-10 py-6 ' key={index}>
            <Link href={item.slug}>
              <div className='relative group '>
                <div className='overflow-hidden'>
                  <Image
                    src={item.imageURL}
                    alt=''
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-full object-cover object-center group-hover:scale-105 transition-all ease-in-out duration-500'
                  />
                </div>
                <div className='absolute top-[15px] left-[15px] w-[calc(100%-30px)] h-[calc(100%-30px)] border border-white '></div>
              </div>
            </Link>

            <div className='pt-5 flex flex-row justify-between items-center'>
              <h2 className='text-2xl tracking-wider leading-normal text-gray-900'>
                <Link href={item.slug}>{item.title}</Link>
              </h2>
              <p className=' before:content[""] before:inline-flex before:w-[50px] before:h-px before:bg-gray-900 before:align-middle before:mr-2.5'>
                {item.countProduct}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
