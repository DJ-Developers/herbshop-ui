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
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto pt-32 px-6 pb-6 '>
        {/* MAIN FOOTER */}
        <div className='grid grid-cols-3 gap-8'>
          <div>
            <LogoSimple disabledLink={true} />
            <p className='text-sm text-gray-600 font-light mt-8 '>
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            {/* SOCIAL */}

            <div className='p-6 flex flex-row gap-4'>
              <Facebook />
              <Instagram />
              <Twitter />
              <Linkin />
            </div>
          </div>
          <div className='col-span-2 grid grid-cols-2 gap-8'>
            <div className='grid grid-cols-2 gap-x-8'>
              {/* COMPANY */}
              <div className='text-sm'>
                <h3 className='font-semibold'>Company</h3>
                <ul className='mt-6 font-light'>
                  {company.map((item) => (
                    <li key={item.id} className='mt-4 hover:font-normal'>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LEGAL */}
              <div className='text-sm'>
                <h3 className='font-semibold'>Legal</h3>
                <ul className='mt-6 font-light'>
                  {legal.map((item) => (
                    <li key={item.id} className='mt-4 hover:font-normal'>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* CONTACT */}
            <div className='text-sm'>
              <h3 className='font-semibold'>Contact</h3>
              <div className='mt-6 font-light flex flex-col gap-4'>
                <p>187/5 Vo Van Ngan, Linh Chieu, Tp. Thu Duc, Tp. HCM</p>
                <p>support@herbshop.vn</p>
                <p>090 xxxx xxxx</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='pt-8 mt-24 border-t'>
          <p className='text-xs leading-5 text-gray-600 font-light'>
            © 2023 Herbshop, Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
