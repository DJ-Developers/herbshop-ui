'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { RadioGroup } from '@headlessui/react'

// Components
import { CheckCircleIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { ColorPreview } from '@/components/color-utils'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const PAYMENT_METHOD = [
  {
    label: 'Cash on delivery',
    value: 'cash',
    description: 'Pay with cash when your order is delivered.',
  },
  {
    label: 'eTransfer',
    value: 'etransfer',
    description: 'You will be redirected to our account bank.',
  },
]

export default function CheckOut() {
  const [paymentMethod, setPaymentMethod] = useState('cash')
  return (
    <div className='max-w-7xl mx-auto lg:px-6 lg:py-20 px-4 py-10'>
      <h2 className='lg:text-2xl font-semibold mb-10'>
        Billing & shipping address
      </h2>
      <div className='grid lg:grid-cols-5 lg:gap-10 '>
        {/* Checkout form */}
        <div className='lg:col-span-3'>
          <div className='shadow-md rounded-2xl mb-6 px-6 lg:py-16 py-8 flex flex-col gap-6'>
            {/* Contact information */}
            <section aria-labelledby='contact-info-heading'>
              <div className='flex items-center my-6'>
                <span className='w-8 h-8 ring-1 ring-gray-300 items-center justify-center inline-flex rounded-full text-sm font-medium mr-4'>
                  1
                </span>
                <h2
                  id='contact-info-heaading'
                  className='text-gray-900 font-medium text-lg'>
                  Contact information
                </h2>
              </div>

              <div className='grid lg:grid-cols-2 gap-6 mt-4'>
                <div className='lg:col-span-2'>
                  <label htmlFor='full-name' className='text-sm'>
                    Full name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='full-name'
                      name='full-name'
                      autoComplete='full-name'
                      className='py-2 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>
                </div>
                <div>
                  <label htmlFor='email-address' className='text-sm'>
                    Email address
                  </label>
                  <div className='mt-1'>
                    <input
                      type='email'
                      id='email-address'
                      name='email-address'
                      autoComplete='email'
                      className='py-2 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>
                </div>
                <div>
                  <label htmlFor='phone-number' className='text-sm'>
                    Phone number
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='phone-number'
                      name='phone-number'
                      autoComplete='phone-number'
                      className='py-2 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>
                </div>
              </div>
            </section>

            {/* Shiping address */}
            <section aria-labelledby='shipping-heading'>
              <div className='flex items-center my-6'>
                <span className='w-8 h-8 ring-1 ring-gray-300 items-center justify-center inline-flex rounded-full text-sm font-medium mr-4'>
                  2
                </span>
                <h2
                  id='shipping-heading'
                  className='text-gray-900 font-medium text-lg'>
                  Shipping address
                </h2>
              </div>

              <div className='grid lg:grid-cols-3 gap-4 mt-4'>
                {/* Street Address */}
                <div className='lg:col-span-3'>
                  <label htmlFor='address' className='text-sm'>
                    Address
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='address'
                      name='address'
                      autoComplete='street-address'
                      className='py-2 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>
                </div>

                {/* Ward */}
                <div>
                  <label htmlFor='ward' className='text-sm'>
                    Ward
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='ward'
                      name='ward'
                      autoComplete='ward-name'
                      className='py-2 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>
                </div>

                {/* District */}
                <div>
                  <label htmlFor='ward' className='text-sm'>
                    District
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='district'
                      name='district'
                      autoComplete='district-name'
                      className='py-2 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>
                </div>
                {/* Province */}
                <div>
                  <label htmlFor='province' className='text-sm'>
                    Province
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='province'
                      name='province'
                      autoComplete='province-name'
                      className='py-2 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>
                </div>
                {/* Country */}
                {/* <div>
                  <label htmlFor='country' className='text-sm'>
                    Country
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='country'
                      name='country'
                      autoComplete='country-name'
                      className='py-2 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>
                </div> */}
              </div>
            </section>

            {/* Payment */}
            <section aria-labelledby='payment-heading'>
              <div className='flex items-center my-6'>
                <span className='w-8 h-8 ring-1 ring-gray-300 items-center justify-center inline-flex rounded-full text-sm font-medium mr-4'>
                  3
                </span>
                <h2
                  id='payment-heading'
                  className='text-gray-900 font-medium text-lg'>
                  Payment method
                </h2>
              </div>

              <div className='mt-4'>
                <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
                  <RadioGroup.Label className='sr-only'>
                    Payment method
                  </RadioGroup.Label>
                  <div className=' flex flex-col gap-6'>
                    {PAYMENT_METHOD.map((payment) => (
                      <RadioGroup.Option
                        key={payment.value}
                        value={payment.value}
                        className={({ checked }) =>
                          classNames(
                            'p-5 cursor-pointer rounded-lg border',
                            checked ? 'ring-2 ring-gray-900 shadow-lg ' : ''
                          )
                        }>
                        {({ checked }) => (
                          <div className='flex justify-between '>
                            <div className='text-sm'>
                              <RadioGroup.Label className='font-medium mb-1'>
                                {payment.label}
                              </RadioGroup.Label>
                              <RadioGroup.Description className='text-gray-500'>
                                {payment.description}
                              </RadioGroup.Description>
                            </div>
                            {checked && (
                              <div className='shrink-0'>
                                <CheckCircleIcon className='h-6 w-6' />
                              </div>
                            )}
                          </div>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </section>

            {/* Billing Address */}
            <section aria-labelledby='billing-heading'>
              <div className='flex items-center my-6'>
                <span className='w-8 h-8 ring-1 ring-gray-300 items-center justify-center inline-flex rounded-full text-sm font-medium mr-4'>
                  4
                </span>

                <h2
                  id='billing-heading'
                  className='text-gray-900 font-medium text-lg'>
                  Billing address
                </h2>
              </div>

              <div className='mt-6'>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='same-as-shipping'
                    name='same-as-shipping'
                    defaultChecked
                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-0'
                  />
                  <div className='ml-2'>
                    <label
                      htmlFor='same-as-shipping'
                      className='text-sm text-gray-900'>
                      Same as shipping information
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/*  */}
            <div className='mt-10 pt-6 border-t'>
              {/* <Link href='/order-summary'>
                <button className='px-4 py-2 rounded-lg bg-green-600 text-sm text-white w-full'>
                  Confirm order
                </button>
              </Link> */}
              <p className='text-sm text-gray-500 lg:mt-0 mt-4'>
                You won't be charged until the next step.
              </p>
            </div>
          </div>
          <Link
            href='/cart'
            className='text-sm leading-6 text-gray-900 font-medium py-2 px-3 hover:bg-gray-100 inline-flex items-center rounded-lg'>
            <ChevronLeftIcon className='h-4 w-4 mr-2 -ml-2' />
            Back
          </Link>
        </div>

        {/* Order Summary */}
        <div className='lg:col-span-2'>
          <section aria-labelledby='summary-heading'>
            <div className='lg:py-16 py-6'>
              <h2
                id='summary-heading'
                className='text-gray-900 font-medium text-lg'>
                Order summary
              </h2>
              <ul className='text-sm text-gray-900'>
                <li className='py-5 flex items-center border-b'>
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
                <li className='py-5 flex items-center  border-b'>
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

              {/* Total */}
              <div className='flex flex-col gap-4 py-6'>
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
          </section>
          <Link href='/order-summary'>
            <button className='px-4 py-2 bg-black text-white rounded-lg w-full text-sm leading-8 font-medium hover:bg-gray-700'>
              Comfirm order
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
