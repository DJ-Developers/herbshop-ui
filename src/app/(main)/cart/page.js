import React from 'react'
import Image from 'next/image'

import { ColorPreview } from '@/components/color-utils'
import {
  TrashIcon,
  MinusSmallIcon,
  PlusIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const TABLE_HEADER = [
  {
    id: 'product',
    label: 'Product',
  },
  {
    id: 'price',
    label: 'Price',
  },
  {
    id: 'quantity',
    label: 'Quantity',
  },
  {
    id: 'totalPrice',
    label: 'Total Price',
  },
  {
    id: '',
  },
]

export default function Cart() {
  return (
    <div className='max-w-7xl mx-auto px-6 py-20'>
      <h2 className='text-2xl font-semibold mb-10'>Shopping Cart</h2>
      <div className='grid grid-cols-3 gap-6'>
        {/* Shopping Cart */}
        <div className='col-span-2 '>
          {/* Card */}
          <div className='shadow-md rounded-2xl mb-6'>
            {/* Card Header */}
            <div className='p-6'>
              <h4 className='text-lg font-semibold'>
                Cart
                <span className='text-base text-gray-500 font-normal'>
                  &nbsp;(1 item)
                </span>
              </h4>
            </div>

            {/* Table */}
            <table className='table-auto w-full'>
              <thead>
                <tr className=' bg-gray-100'>
                  {TABLE_HEADER.map((item) => (
                    <th
                      className='p-4 text-sm font-normal text-gray-500 text-left'
                      key={item.id}>
                      {item.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-4 text-sm'>
                    <div className='flex flex-row items-center'>
                      <Image
                        src='/product/CrochetWallet_1.jpg'
                        alt=''
                        width={0}
                        height={0}
                        sizes='100%'
                        className='w-16 h-16 object-fill mr-4'
                      />
                      <div className='flex flex-col gap-y-2'>
                        <p>2750 Cotu Classic Sneaker</p>
                        <div className='flex flex-row gap-2 items-center'>
                          <p className='text-sm text-gray-500 font-light '>
                            color:
                          </p>
                          <ColorPreview colors={['#94d82d']} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='p-4 text-sm text-center'> $93.68</td>
                  <td className='p-4 text-sm text-center'>
                    <div className='flex flex-col gap-2'>
                      <div className='w-24 flex justify-between items-center mb-1 border px-1.5 py-1 rounded-lg'>
                        <button className='p-1'>
                          <MinusSmallIcon className='h-4 w-4' />
                        </button>
                        1
                        <button className='p-1'>
                          <PlusIcon className='h-4 w-4' />
                        </button>
                      </div>
                      <p className='text-xs font-light text-gray-400'>
                        available: 12
                      </p>
                    </div>
                  </td>
                  <td className='p-4 text-sm text-center'> $93.68</td>
                  <td>
                    <button className='p-2 rounded-full hover:bg-gray-100'>
                      <TrashIcon className='w-5 h-5' />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link
            href='/product'
            className='text-sm leading-6 text-gray-900 font-medium py-2 px-3 hover:bg-gray-100 inline-flex items-center rounded-lg'>
            <ChevronLeftIcon className='h-4 w-4 mr-2 -ml-2' />
            Continue Shopping
          </Link>
        </div>

        {/* Order Sumary */}
        <div>
          <div className='rounded-2xl shadow-md mb-6'>
            <h4 className='text-lg font-medium p-6 pb-0'>Order Sumary</h4>
            <div className='p-6 flex flex-col gap-4'>
              <div className='flex flex-row justify-between'>
                <p className='text-sm text-gray-500 '>Sub Total</p>
                <p className='text-sm font-medium'>$93.68</p>
              </div>
              <div className='flex flex-row justify-between'>
                <p className='text-sm text-gray-500 '>Discount</p>
                <p className='text-sm font-medium'>_</p>
              </div>
              <div className='flex flex-row justify-between'>
                <p className='text-sm text-gray-500 '>Shipping</p>
                <p className='text-sm font-medium'>_</p>
              </div>
              <hr className='border-t-1 border-dashed'></hr>
              <div className='flex flex-row justify-between'>
                <p className='font-medium'>Total</p>
                <div className='text-right'>
                  <p className='text-red-500 font-medium'>$93.68</p>
                  <p className='text-xs italic mt-2'>
                    (VAT included if applicable)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link href='/checkout'>
            <button className='px-4 py-2 bg-black text-white rounded-lg w-full text-sm leading-8 font-medium hover:bg-gray-700'>
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
