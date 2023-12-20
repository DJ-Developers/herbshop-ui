import { ColorPreview } from '@/components/color-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OrderSummary() {
  return (
    <div className='max-w-7xl mx-auto lg:px-6 lg:py-20'>
      <div className='grid lg:grid-cols-2 gap-12'>
        <div className='lg:pr-12'>
          <Image
            src='/home/slide2.jpg'
            alt=''
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div className='p-6'>
          <h1 className='text-sm text-green-600'>Payment successful</h1>
          <p className='text-5xl font-bold mt-2'>Thanks for ordering</p>
          <p className='text-gray-500 mt-2'>
            We appreciate your order, we are currently processing it. So hang
            tight and we will send you confirmation very soon!
          </p>

          {/*  */}
          <dl className='mt-16 text-sm font-medium'>
            <dt>Tracking number</dt>
            <dd className='mt-2 text-green-600'>51547878755545848512</dd>
          </dl>

          {/*  */}
          <ul className='text-sm text-gray-900 mt-6'>
            <li className='py-5 flex items-center border-t'>
              <Image
                src='/product/CrochetWallet_1.jpg'
                alt=''
                width={0}
                height={0}
                sizes='100%'
                className='h-20 w-20 object-cover rounded-lg'
              />
              <div className='flex-shrink flex-grow ml-4'>
                <h3 className=' font-medium'>2750 Cotu Classic Sneaker</h3>
                <div className='mt-2 text-gray-500 text-xs flex items-center divide-x divide-gray-300'>
                  <ColorPreview colors={['#94d82d']} />
                  <div className='pl-1 ml-1'>
                    <p>Quantity: 1</p>
                  </div>
                </div>
              </div>
              <p className='ml-4'>$93.68</p>
            </li>
          </ul>

          {/* Summary */}
          <dl className='pt-6 text-sm font-medium text-gray-900 border-t'>
            <div className='flex justify-between'>
              <dt className='text-gray-500'> Subtotal</dt>
              <dd>$72.00</dd>
            </div>
            <div className='flex justify-between mt-6'>
              <dt className='text-gray-500'> Shipping</dt>
              <dd>$8.00</dd>
            </div>
            <div className='flex justify-between mt-6 text-base pt-6 border-t'>
              <dt>Total</dt>
              <dd>$80.00</dd>
            </div>
          </dl>

          {/* Shipping & Payment */}
          <dl className='mt-16 text-sm grid grid-cols-2 gap-6'>
            <div>
              <dt className='font-medium'>Shipping address</dt>
              <dd className='mt-2 text-gray-500'>
                <address>
                  <span className='block'>Kristin Watson</span>
                  <span className='block'>7363 Cynthia Pass</span>
                  <span className='block'>Toronto, ON N3Y 4H8</span>
                </address>
              </dd>
            </div>
            <div>
              <dt className='font-medium'>Payment Information</dt>
              <dd className='mt-2  text-gray-500'>Cash on delivery</dd>
            </div>
          </dl>

          {/*  */}
          <div className='mt-16 py-6 flex justify-end border-t'>
            <Link
              className='text-sm  text-green-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-lg'
              href='/'>
              Continue Shopping →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
