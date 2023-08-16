import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function SingleProductPage() {
  return (
    <div className='max-w-7xl m-auto px-6 mt-10 mb-32'>
      {/* BREADCRUMBS */}
      <div className='mb-10'>
        <nav aria-label='Breadcrumb' className='text-sm'>
          <ol className='flex items-center'>
            <li>
              <Link href='/' className='hover:underline'>
                Home
              </Link>
            </li>
            <li>
              <div className='h-1 w-1 bg-gray-400 rounded-full mx-4' />
            </li>
            <li>
              <Link href='/shop' className='hover:underline'>
                Shop
              </Link>
            </li>
            <div className='h-1 w-1 bg-gray-400 rounded-full mx-4' />
            <li>
              <p className='text-gray-400'>Simple Wallet Crochet 1</p>
            </li>
          </ol>
        </nav>
      </div>

      {/* PRODUCT INFORMATION */}
      <div className='grid grid-cols-2 gap-6'>
        <div>
          <Image
            src='/product/CrochetWallet_1.jpg'
            alt=''
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-auto object-cover'
          />
        </div>
        {/* CONTENTS */}
        <div className='flex flex-col gap-6 p-8'>
          <div className='flex flex-col gap-4'>
            <div>
              <span
                className={`h-6 min-w-6 rounded-md uppercase inline-flex items-center px-2 text-xs bg-[#ff5630]/20 text-[#b71d18] font-medium`}>
                Sale
              </span>
            </div>
            <p className=' text-green-600 text-sm font-medium'>IN STOCK</p>
            <h1 className='text-xl font-medium'>Simple Wallet Crochet 1</h1>
            <p className=' text-xl font-semibold'>$77.32</p>
            <p className='text-sm text-gray-400 font-light'>
              Featuring the original ripple design inspired by Japanese bullet
              trains, the Nike Air Max 97 lets you push your style full-speed
              ahead.
            </p>
          </div>
          <hr className='border-t-1 border-dashed'></hr>
          <div className='flex flex-row justify-between text-sm'>
            <p>Colors</p>
          </div>
          <div className='flex flex-row justify-between text-sm'>
            <p>Quantity</p>
            <p>1</p>
          </div>
          <hr className='border-t-1 border-dashed'></hr>
          <div className='flex flex-row justify-center gap-6'>
            <button className='px-[22px] py-[11px] bg-[#FFAB00] rounded-lg w-full font-medium'>
              Add to Cart
            </button>
            <button className='px-[22px] py-[11px] bg-[#00AB55] rounded-lg w-full text-white font-medium'>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* DESCRIPTIONS */}
      <div className='rounded-2xl shadow-md'>
        <div className='h-12 inline-flex items-center'>
          <p className='text-sm font-medium px-6'>Description</p>
        </div>
        <hr className='border-t-1'></hr>
        <div className='p-6'>
          <h6 className='text-lg font-medium'>Specifications</h6>
          <br />
          <p className='text-sm'>
            The foam sockliner feels soft and comfortable <br /> Not intended
            for use as Personal Protective Equipment
          </p>
        </div>
      </div>
    </div>
  )
}
