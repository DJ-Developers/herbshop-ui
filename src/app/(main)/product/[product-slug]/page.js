import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

//
import { ShoppingCartIcon, StarIcon } from '@heroicons/react/20/solid'
import { ColorSinglePicker } from '@/components/color-utils'
import {
  ChevronRightIcon,
  MinusSmallIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'

import CarouselThumbnail from '@/components/carousel/CarouselThumbnail'
import { product } from '@/constants'

import ContentPreview from '@/components/text-editor/ContentPreview'
import { PRODUCTS } from '@/constants'
import { Facebook, Instagram, Twitter } from '@/components/icons'
import CarouselBasic from '@/components/carousel/CarouselBasic'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SingleProductPage() {
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
              Shop
            </h1>
            <div className='mt-3'>
              <ul className='text-sm flex flex-row items-center font-medium'>
                <li className='inline-flex items-center'>
                  <Link
                    href='/'
                    className='text-gray-600 hover:text-gray-900 hover:underline'>
                    Home
                  </Link>
                  <ChevronRightIcon className='h-4 w-4 mx-1.5' />
                </li>

                <li className='lg:inline-flex hidden items-center '>
                  <Link
                    href='/product'
                    className='text-gray-600 hover:text-gray-900 hover:underline'>
                    Products
                  </Link>
                  <ChevronRightIcon className='h-4 w-4 mx-1.5' />
                </li>

                <li className='inline-flex items-center'>
                  <Link
                    href={`/product-category/${product.category.slug}`}
                    className='text-gray-600 hover:text-gray-900 hover:underline'>
                    {product.category.name}
                  </Link>
                  <ChevronRightIcon className='h-4 w-4 mx-1.5' />
                </li>

                <li className=' font-semibold'>{product.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='max-w-7xl mx-auto lg:px-10 px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div>
            <CarouselThumbnail images={product.images} />
          </div>
          <div>
            {/*  */}
            <div className='flex flex-col space-y-5'>
              <h1 className='text-3xl font-medium'>{product.title}</h1>
              {/* Reviews */}
              <div>
                <h3 className='sr-only'>Reviews</h3>
                <div className='flex items-center'>
                  <div className='flex items-center'>
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.reviews.average > rating
                            ? 'text-yellow-500'
                            : 'text-gray-200',
                          'h-4 w-4 flex-shrink-0'
                        )}
                        aria-hidden='true'
                      />
                    ))}
                  </div>
                  <p className='sr-only'>
                    {product.reviews.average} out of 5 stars
                  </p>
                  <Link
                    href={product.reviews.href}
                    className='ml-3 text-gray-400 font-light text-sm'>
                    ({product.reviews.totalCount} reviews)
                  </Link>
                </div>
              </div>
              <div className='flex gap-1 text-xl font-semibold'>
                <p
                  className={product.salePrice && 'text-gray-400 line-through'}>
                  {product.price}
                </p>
                {product.salePrice && product.salePrice}
              </div>
              {/* Short Description */}
              <p className=' text-sm text-gray-500 font-light leading-7'>
                {product.shortDescriptions}
              </p>

              {/* Cart */}
              <div>
                {/* Quantity */}
                <div className='flex flex-row text-sm font-medium items-center'>
                  <div className='w-1/4  uppercase'>Quantity</div>
                  <div className='flex justify-between items-center mb-1 border-b px-3 py-2 gap-4'>
                    <button className='p-1 hover:bg-gray-50 rounded-full'>
                      <MinusSmallIcon className='h-5 w-5' />
                    </button>
                    1
                    <button className='p-1hover:bg-gray-50 rounded-full'>
                      <PlusIcon className='h-5 w-5' />
                    </button>
                  </div>
                </div>
                {/* Action */}
                <div className='w-full mt-6 mb-9 flex items-center gap-6'>
                  <button className='px-8 py-4 bg-gray-900 hover:bg-white hover:text-gray-900 text-white border border-gray-900  rounded-full inline-flex items-center transition-all duration-500'>
                    <ShoppingCartIcon className='w-4 h-4 mr-2' />
                    <p className='uppercase text-sm'>Add to cart</p>
                  </button>
                </div>
              </div>
            </div>
            {/* Meta */}
            <div>
              <table className='text-sm border-t w-full'>
                <tbody>
                  <tr>
                    <td className='pt-5 pr-2.5 font-medium leading-5 w-1/3'>
                      SKU
                    </td>
                    <td className='pt-5 font-light text-gray-500 '>03285</td>
                  </tr>
                  <tr>
                    <td className='pt-5 font-medium w-1/4 pr-2.5 leading-5'>
                      Category
                    </td>
                    <td className='pt-5 font-light text-gray-500'>
                      Home Decor
                    </td>
                  </tr>
                  <tr>
                    <td className='pt-5 font-medium w-1/4 pr-2.5 leading-5'>
                      Tag
                    </td>
                    <td className='pt-5 font-light text-gray-500'>Amigurimi</td>
                  </tr>
                </tbody>
              </table>
              {/* Product Share */}
              <table className='text-sm w-full'>
                <tbody>
                  <tr>
                    <td className='font-medium leading-5 pt-5 pr-2.5 w-1/3'>
                      Share on
                    </td>
                    <td className='pt-5'>
                      <ul className=' inline-flex text-gray-500'>
                        <li className='mr-5'>
                          <Link href='#'>
                            <Facebook />
                          </Link>
                        </li>
                        <li className='mr-5'>
                          <Link href='#'>
                            <Instagram />
                          </Link>
                        </li>
                        <li className=''>
                          <Link href='#'>
                            <Twitter />
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Descriptions */}
      <div className='max-w-7xl mx-auto lg:px-10 px-6 my-20'>
        <div className='rounded-2xl shadow-md'>
          <div className='h-12 inline-flex items-center'>
            <p className='text-sm font-medium px-6'>Description</p>
          </div>
          <hr className='border-t-1'></hr>
          <div className='lg:px-8 px-6 lg:pt-10 pt-8 lg:pb-16 pb-10'>
            <ContentPreview data={product.description} />
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto lg:px-10 px-6 py-16'>
        <h3 className='lg:text-4xl text-3xl font-medium ml-4 text-center mb-14'>
          You Might Also Like
        </h3>
        <CarouselBasic data={PRODUCTS} />
      </div>
    </div>
  )
}
