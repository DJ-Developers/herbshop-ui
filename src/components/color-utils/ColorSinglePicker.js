'use client'
import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   salePrice: '$182',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Green', class: 'bg-green-500', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: false },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: '2XL', inStock: true },
//     { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function ColorSinglePicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  return (
    <div>
      <RadioGroup value={selectedColor} onChange={setSelectedColor}>
        <RadioGroup.Label className='sr-only'>Choose a color</RadioGroup.Label>
        <div className='flex items-center gap-4'>
          {colors.map((color) => {
            const isWhite = color.name === 'White'
            return (
              <RadioGroup.Option
                key={color.name}
                value={color}
                className={({ active, checked }) =>
                  classNames(
                    checked
                      ? ' scale-[1.4] transition-all drop-shadow-lg ease-in-out'
                      : '',
                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                  )
                }>
                {({ active, checked }) => (
                  <div
                    className={classNames(
                      color.class,
                      'h-5 w-5 rounded-full relative flex justify-center items-center',
                      isWhite ? 'border border-black border-opacity-10' : ''
                    )}>
                    <RadioGroup.Label as='span' className='sr-only'>
                      {color.name}
                    </RadioGroup.Label>

                    {checked && (
                      <CheckIcon
                        className={classNames(
                          ' h-2.5 w-2.5',
                          isWhite ? 'text-black' : 'text-white'
                        )}
                      />
                    )}
                  </div>
                )}
              </RadioGroup.Option>
            )
          })}
        </div>
      </RadioGroup>
    </div>
  )
}
