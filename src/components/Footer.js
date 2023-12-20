import Link from 'next/link'
import React from 'react'

import { LogoSimple } from '@/components/logo'
import { Facebook, Instagram, Linkin, Twitter } from '@/components/icons'

const company = [
  {
    id: 1,
    title: 'About',
    url: '/about',
  },
  {
    id: 2,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 3,
    title: 'Jobs',
    url: '/jobs',
  },
  {
    id: 4,
    title: 'Partners',
    url: '/partners',
  },
]
const legal = [
  {
    id: 1,
    title: 'Claim',
    url: '/claim',
  },
  {
    id: 2,
    title: 'Privacy',
    url: '/privacy',
  },
  {
    id: 3,
    title: 'Terms',
    url: '/terms',
  },
]

export default function Footer() {
  return (
    <footer className='bg-[#f8f8f8]'>
      <div className='max-w-7xl mx-auto px-10'>
        <div className=' flex lg:flex-row flex-col pt-24 pb-16 gap-y-10'>
          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start'>
            <LogoSimple disabledLink={true} className='w-10 h-10' />

            <p className='text-gray-600 font-light mt-8 leading-7 text-sm lg:max-w-xs text-center lg:text-left  '>
              Tự tay mình tạo ra những món đồ đẹp đẽ là một quá trình tuyệt vời,
              nơi bạn có thể tận hưởng niềm vui trong khi hoàn thiện tác phẩm
              của mình.
            </p>
          </div>
          <div className='lg:w-1/2 w-full'>
            <div className='flex'>
              <div className='w-1/3'>
                <ul className='text-gray-600 text-sm font-medium flex flex-col gap-y-6'>
                  <li className='hover:text-gray-900'>
                    <Link href='/about-us'>About Us</Link>
                  </li>
                  <li className=' hover:text-gray-900'>
                    <Link href='#'>Store location</Link>
                  </li>
                  <li className=' hover:text-gray-900'>
                    <Link href='/contact-us'>Contact</Link>
                  </li>
                  <li className=' hover:text-gray-900'>
                    <Link href='/order-tracking'>Orders</Link>
                  </li>
                </ul>
              </div>
              <div className='w-1/3'>
                <ul className='text-gray-600 text-sm font-medium flex flex-col gap-y-6'>
                  <li className='hover:text-gray-900'>
                    <Link href='#'>Return</Link>
                  </li>
                  <li className=' hover:text-gray-900'>
                    <Link href='#'>Support policy</Link>
                  </li>
                  <li className=' hover:text-gray-900'>
                    <Link href='#'>Size guide</Link>
                  </li>
                  <li className=' hover:text-gray-900'>
                    <Link href='#'>FAQs</Link>
                  </li>
                </ul>
              </div>
              <div className='w-1/3'>
                <ul className='text-gray-600 text-sm font-medium flex flex-col gap-y-6'>
                  <li className='hover:text-gray-900 inline-flex'>
                    <Facebook className='w-5 h-5 mr-4' />
                    <Link href='#'>Facebook</Link>
                  </li>
                  <li className=' hover:text-gray-900 inline-flex '>
                    <Instagram className='w-5 h-5 mr-4' />
                    <Link href='#'>Instagram</Link>
                  </li>
                  <li className=' hover:text-gray-900 inline-flex '>
                    <Twitter className='w-5 h-5 mr-4' />
                    <Link href='#'>Twitter</Link>
                  </li>
                  <li className=' hover:text-gray-900 inline-flex'>
                    <Linkin className='w-5 h-5 mr-4' />
                    <Link href='#'>Linkin</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='py-6 border-t text-xs leading-5 text-gray-600 font-light text-center lg:text-left '>
          © 2023 Herbshop. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
