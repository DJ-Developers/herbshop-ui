import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import PageTitle from '@/components/common/PageTitle'
import { ColorPreview } from '@/components/color-utils'
import { fNumber, fCurrency } from '@/utils/formatNumber'
import { cartItems } from '@/constants'

import {
  TrashIcon,
  MinusSmallIcon,
  PlusIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline'

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

export const metadata = {
  title: 'Cart',
}
export default function Cart() {
  return (
    <div>
      <PageTitle title='Cart' />
      <div className='max-w-7xl mx-auto lg:px-10 px-4 my-20'>
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:space-x-10'>
          <div className='lg:col-span-2 '>
            <div className=' shadow rounded-2xl mb-6'>
              <div className='p-6'>
                <h4 className='text-lg font-semibold'>
                  Cart
                  <span className='text-base text-gray-500 font-normal'>
                    &nbsp;(1 item)
                  </span>
                </h4>
              </div>
              <div className='overflow-x-scroll'>
                <table className='table-auto w-full '>
                  <thead>
                    <tr className=' bg-gray-100 '>
                      {TABLE_HEADER.map((item) => (
                        <th
                          className='p-4 text-sm font-medium text-gray-600 text-left'
                          key={item.id}>
                          {item.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='space-y-6 divide-y divide-gray-200 text-sm '>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className='p-4'>
                          <div className='flex flex-row items-center space-x-4'>
                            <div className='w-16 h-16 overflow-hidden rounded-xl bg-gray-100 shrink-0 '>
                              <Image
                                src={item.imageSrc}
                                alt={item.productName}
                                width={0}
                                height={0}
                                sizes='100%'
                                className='w-full h-full object-fill mix-blend-multiply'
                              />
                            </div>

                            <div className='flex flex-col space-y-2 min-w-[150px]'>
                              <p className='font-medium'>{item.productName}</p>
                              <div className='flex flex-row items-center'>
                                {item.size && (
                                  <div className='inline-flex items-center'>
                                    <div className='text-gray-600 '>
                                      size:
                                      <span className='bg-gray-200 inline-flex justify-center items-center text-xs font-medium ml-1 h-6 min-w-[24px] px-1.5 rounded-md'>
                                        {item.size}
                                      </span>
                                    </div>
                                    {item.colors && (
                                      <div className='w-[1px] h-4 bg-gray-200 mx-2'></div>
                                    )}
                                  </div>
                                )}
                                {item.colors && (
                                  <ColorPreview colors={item.colors} />
                                )}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/*  */}
                        <td className='p-4  text-center'>
                          {fNumber(item.price)}
                        </td>
                        <td className='p-4 text-center'>
                          <div className='flex flex-col space-y-1 items-center'>
                            <div className='w-24 flex justify-between items-center mb-1 border px-1.5 py-1 rounded-lg'>
                              <button className='p-1'>
                                <MinusSmallIcon className='h-4 w-4' />
                              </button>
                              {item.quantity}
                              <button className='p-1'>
                                <PlusIcon className='h-4 w-4' />
                              </button>
                            </div>
                            <p className='text-xs font-light text-gray-400'>
                              available: 12
                            </p>
                          </div>
                        </td>
                        <td className='p-4 text-center'>
                          {fNumber(item.price * item.quantity)}
                        </td>
                        <td>
                          <button className='p-2 rounded-full hover:bg-gray-100'>
                            <TrashIcon className='w-5 h-5' />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Link
              href='/product'
              className='text-sm leading-6 text-gray-900 font-medium py-2 px-3 hover:bg-gray-100 inline-flex items-center rounded-lg'>
              <ChevronLeftIcon className='h-4 w-4 mr-2 -ml-2' />
              Continue Shopping
            </Link>
          </div>

          {/*  */}

          <div>
            <div className=' mb-6 shadow-md rounded-2xl'>
              <h4 className='text-lg font-medium p-6 pb-0'>Cart total</h4>
              <div className='p-6 flex flex-col space-y-4 text-sm'>
                <div className='flex flex-row justify-between'>
                  <p className=' text-gray-500 '>Sub Total</p>
                  <p className='font-medium'>
                    {fNumber(
                      cartItems.reduce(
                        (n, { quantity, price }) => n + quantity * price,
                        0
                      )
                    )}
                  </p>
                </div>
                <div className='flex flex-row justify-between'>
                  <p className=' text-gray-500 '>Discount</p>
                  <p className=' font-medium'>_</p>
                </div>
                <div className='flex flex-row justify-between'>
                  <p className=' text-gray-500 '>Shipping</p>
                  <p className='font-medium'>_</p>
                </div>

                <hr className='border-t-1 border-dashed'></hr>
                <div className='flex flex-row justify-between'>
                  <p className='font-medium'>Total</p>
                  <div className='text-right'>
                    <p className='text-red-500 font-medium'>
                      {fNumber(
                        cartItems.reduce(
                          (n, { quantity, price }) => n + quantity * price,
                          0
                        )
                      )}
                    </p>
                    <p className='text-xs italic mt-2'>
                      (VAT included if applicable)
                    </p>
                  </div>
                </div>
                {/* Discount Code */}
                <form className='relative'>
                  <input
                    type='text'
                    name='discount'
                    id='discount'
                    className='border border-gray-300 transition-colors duration-200 pl-5 pr-24 h-12 w-full rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:border-gray-900 sm:text-sm sm:leading-6'
                    placeholder='DISCOUNT CODE'
                  />
                  <button className=' absolute text-[#00a76f] font-semibold rounded-lg top-1/2 -translate-y-1/2 right-4 hover:bg-[#00a76f14] text-sm px-2 py-1.5 transition-colors duration-300'>
                    Apply
                  </button>
                </form>
              </div>
            </div>
            <Link href='/checkout'>
              <button className='px-4 py-2 border border-gray-900 uppercase transition-colors duration-300 bg-gray-900 text-white rounded-full w-full text-sm leading-8 font-medium hover:bg-white hover:text-gray-900'>
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
