import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ColorPreview } from '../color-utils'

export default function ProductCard({ product }) {
  const { name, slug, featuredImage, price, sale_price, colors, label } =
    product
  return (
    <div className='shadow-lg rounded-xl overflow-hidden relative'>
      {/* IMAGE */}
      <div className='p-2'>
        <Image
          src={featuredImage}
          alt=''
          width={0}
          height={0}
          sizes='100vw'
          className='object-cover w-full h-auto aspect-square rounded-xl'
        />
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
      <div className='p-6 flex flex-col gap-6'>
        <Link href={`/shop/${slug}`} className='hover:underline'>
          <h3 className='text-sm font-medium line-clamp-1'>{name}</h3>
        </Link>
        <div className='flex flex-row justify-between items-center'>
          <ColorPreview colors={colors} />
          <div className='flex gap-1 font-medium'>
            <p className={sale_price && 'text-gray-400 line-through'}>
              {price}
            </p>
            {sale_price && sale_price}
          </div>
        </div>
      </div>
    </div>
  )
}
