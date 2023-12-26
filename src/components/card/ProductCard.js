import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ColorPreview } from '../color-utils'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductCard({ product }) {
  const { name, slug, featuredImage, price, sale_price, colors, label } =
    product
  return (
    <div className='shadow rounded-xl overflow-hidden relative'>
      {/* IMAGE */}
      <div className='p-2 '>
        <Link href={`/product/${slug}`}>
          <div className='bg-gray-50 overflow-hidden rounded-xl group '>
            <Image
              src={featuredImage}
              alt=''
              width={0}
              height={0}
              sizes='100vw'
              className='object-cover w-full h-auto aspect-square  mix-blend-multiply group-hover:scale-110 transition-transform duration-500 '
            />
          </div>
        </Link>
      </div>
      {label && (
        <div className='absolute top-4 right-4 '>
          <div
            className={`h-6 min-w-6 rounded-md uppercase inline-flex items-center px-2  text-xs text-white ${
              label === 'sale' ? 'bg-red-500' : 'bg-cyan-500'
            }`}>
            {label}
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className='px-6 pb-6 pt-4 flex flex-col space-y-6'>
        <Link
          href={`/product/${slug}`}
          className='hover:underline  text-gray-600 hover:text-gray-900 transition-all duration-300 '>
          <h3 className='line-clamp-1'>{name}</h3>
        </Link>
        <div
          className={classNames(
            'flex flex-row  items-center justify-end',
            colors && 'justify-between'
          )}>
          {colors && <ColorPreview colors={colors} />}

          <div className='flex font-medium '>
            <p className={sale_price && 'text-gray-400 line-through mr-2'}>
              {price}
            </p>
            {sale_price && sale_price}
          </div>
        </div>
      </div>
    </div>
  )
}
