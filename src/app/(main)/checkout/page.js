'use client'

import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Dialog, RadioGroup, Transition } from '@headlessui/react'

// Components
import { ChevronLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { CloudArrowDownIcon } from '@heroicons/react/20/solid'

import PageTitle from '@/components/common/PageTitle'
import { cartItems } from '@/constants'
import { fNumber } from '@/utils/formatNumber'
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

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('cash')
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <PageTitle title='Checkout' />

      <div className='max-w-7xl mx-auto lg:py-20 lg:px-10 p-4 '>
        <h2 className='lg:text-3xl mb-10 ml-6'>Billing & Shipping address</h2>
        <div className='grid lg:grid-cols-5 grid-cols-1 gap-x-6'>
          <div className='lg:col-span-3'>
            <div className='shadow-md rounded-2xl mb-6 p-6 flex flex-col space-y-6'>
              {/* Contact information */}
              <section aria-labelledby='contact-info-heading'>
                <div className='flex items-center mb-6'>
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
                  <div className='lg:col-span-2 mt-1'>
                    <input
                      type='text'
                      id='full-name'
                      name='full-name'
                      required
                      autoComplete='full-name'
                      placeholder='Full Name'
                      className='py-3 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>

                  <div className='mt-1'>
                    <input
                      type='email'
                      id='email-address'
                      name='email-address'
                      required
                      autoComplete='email'
                      placeholder='Email Address'
                      className='py-3 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>

                  <div className='mt-1'>
                    <input
                      type='text'
                      id='phone-number'
                      name='phone-number'
                      required
                      autoComplete='phone-number'
                      placeholder='Phone Number'
                      className='py-3 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
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
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='address'
                        name='address'
                        required
                        autoComplete='street-address'
                        placeholder='Address'
                        className='py-3 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                    </div>
                  </div>

                  {/* Ward */}
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='ward'
                      name='ward'
                      required
                      autoComplete='ward-name'
                      placeholder='Ward'
                      className='py-3 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>

                  {/* District */}

                  <div className='mt-1'>
                    <input
                      type='text'
                      id='district'
                      name='district'
                      required
                      autoComplete='district-name'
                      placeholder='District'
                      className='py-3 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>

                  {/* Province */}

                  <div className='mt-1'>
                    <input
                      type='text'
                      id='province'
                      name='province'
                      required
                      autoComplete='province-name'
                      placeholder='Province'
                      className='py-3 px-3 w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></input>
                  </div>
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
                              'p-5 cursor-pointer rounded-lg border transition-all duration-300',
                              checked ? 'ring-2 ring-gray-900 shadow-lg' : ''
                            )
                          }>
                          {({ checked }) => (
                            <div className='flex items-center space-x-6 '>
                              {checked && (
                                <div className='shrink-0 '>
                                  <CheckCircleIcon className='h-6 w-6 text-lime-600' />
                                </div>
                              )}
                              <div className='text-sm space-y-2'>
                                <RadioGroup.Label className='font-medium'>
                                  {payment.label}
                                </RadioGroup.Label>
                                <RadioGroup.Description className='text-gray-500'>
                                  {payment.description}
                                </RadioGroup.Description>
                              </div>
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

              {/* Order Optional */}
              <section aria-labelledby='contact-info-heading'>
                <div className='flex items-center mb-6'>
                  <span className='w-8 h-8 ring-1 ring-gray-300 items-center justify-center inline-flex rounded-full text-sm font-medium mr-4'>
                    5
                  </span>
                  <h2
                    id='contact-info-heaading'
                    className='text-gray-900 font-medium text-lg'>
                    Order notes (optional)
                  </h2>
                </div>

                <div className='mt-1'>
                  <textarea
                    type='text'
                    id='order-optional'
                    name='order-optional'
                    rows={2}
                    cols={5}
                    placeholder='Notes about your order, e.g. special notes for delivery.'
                    className='py-2 px-3 w-full min-h-[140px] rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'></textarea>
                </div>
              </section>

              <p className='text-xs text-gray-500 lg:px-6 leading-5'>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
            </div>
            <Link
              href='/cart'
              className='text-sm leading-6 text-gray-900 font-medium py-2 px-3 hover:bg-gray-100 inline-flex items-center rounded-lg'>
              <ChevronLeftIcon className='h-4 w-4 mr-2 -ml-2' />
              Back
            </Link>
          </div>

          {/* Order Summary */}
          <div className='mb-6 lg:col-span-2'>
            <h4 className='text-lg font-medium  p-6 pl-4 pb-0'>
              Order Summary
            </h4>
            <section aria-labelledby='summary-heading'>
              <div className='flow-root lg:px-6 py-6'>
                <ul role='list' className='-my-6 divide-y divide-gray-200'>
                  {cartItems.map((item, index) => (
                    <li key={index} className='flex py-6'>
                      <div className='h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-100'>
                        <Image
                          src={item.imageSrc}
                          alt={item.productName}
                          width={0}
                          height={0}
                          sizes='100vw'
                          className='h-full w-full object-cover object-center mix-blend-multiply'
                        />
                      </div>

                      <div className='ml-4 flex flex-1 flex-col'>
                        <div>
                          <div className='flex justify-between text-sm font-medium text-gray-900'>
                            <h3>
                              <Link href={item.slug} className=' line-clamp-1'>
                                {item.productName}
                              </Link>
                            </h3>
                            <p className='ml-4'>
                              {fNumber(item.price * item.quantity)}
                            </p>
                          </div>
                          <div className='flex flex-row items-center mt-2 text-xs'>
                            {item.size && (
                              <div className='inline-flex items-center'>
                                <div className='text-gray-600 '>
                                  <span className='bg-gray-200 inline-flex justify-center items-center font-medium h-5 min-w-[20px]  rounded'>
                                    {item.size}
                                  </span>
                                </div>
                                {item.colors && (
                                  <div className='w-[1px] h-4 bg-gray-200 mx-1.5'></div>
                                )}
                              </div>
                            )}

                            {item.colors && (
                              <ColorPreview colors={item.colors} />
                            )}
                          </div>
                        </div>
                        <div className='flex flex-1 items-end justify-between text-sm'>
                          <p className='text-gray-500'>
                            {item.quantity} x {fNumber(item.price)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='p-6 '>
                <div className='flex flex-col space-y-4 text-sm border-t border-gray-200 py-6'>
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
                </div>
                <div className='flex flex-row justify-between py-4 border-t border-gray-200'>
                  <p className='font-medium text-base'>Total</p>
                  <div className='text-right'>
                    <p className='text-red-500 font-medium text-base'>
                      {fNumber(
                        cartItems.reduce(
                          (n, { quantity, price }) => n + quantity * price,
                          0
                        )
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className='w-full uppercase rounded-full border border-transparent bg-gray-700 px-6 py-4 text-sm tracking-widest text-white hover:text-gray-900 hover:bg-rose-50 transition-colors duration-300'>
                Place Order
              </button>
            </section>
          </div>
        </div>
      </div>

      {/* Order successfull  */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-900 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed top-0 bottom-0 left-0 right-0 overflow-y-auto'>
            <div className='flex min-h-full items-start justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full h-[calc(100vh-32px)] flex items-center justify-center transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all'>
                  <div className='max-w-lg mx-auto px-4'>
                    <div className='flex flex-col space-y-10 justify-center items-center'>
                      <p className='lg:text-2xl text-xl font-semibold'>
                        Thank you for your purchase!
                      </p>
                      {/*  */}
                      <svg
                        className='lg:h-[260px] h-[180px] w-auto'
                        viewBox='0 0 480 375'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'>
                        <defs>
                          <linearGradient
                            id='paint_linear_594_1565_0'
                            x1='328.809906'
                            y1='432.032043'
                            x2='505.392853'
                            y2='34.047997'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#00AB55' />
                            <stop
                              offset='1.000000'
                              stopColor='#00AB55'
                              stopOpacity='0.007843'
                            />
                          </linearGradient>
                          <pattern
                            id='pattern_594_18390'
                            patternContentUnits='objectBoundingBox'
                            width='1.000000'
                            height='1.000000'>
                            <use
                              xlinkHref='#image594_1839_0'
                              transform='matrix(0.005848,0,0,0.002667,0,0)'
                            />
                          </pattern>
                          <image
                            id='image594_1839_0'
                            width='171.000000'
                            height='375.000000'
                            xlinkHref='data:image/png;base64,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'
                          />
                          <linearGradient
                            id='paint_linear_94_786_0'
                            x1='253.999954'
                            y1='279.999756'
                            x2='67.540604'
                            y2='255.454773'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#00AB55' />
                            <stop offset='1.000000' stopColor='#007B55' />
                          </linearGradient>
                          <linearGradient
                            id='paint_linear_94_787_0'
                            x1='67.000000'
                            y1='163.117188'
                            x2='67.000000'
                            y2='184.396896'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#5BE584' />
                            <stop offset='1.000000' stopColor='#007B55' />
                          </linearGradient>
                          <linearGradient
                            id='paint_linear_94_792_0'
                            x1='133.792007'
                            y1='88.000000'
                            x2='133.792007'
                            y2='105.536598'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#5BE584' />
                            <stop offset='1.000000' stopColor='#007B55' />
                          </linearGradient>
                          <linearGradient
                            id='paint_linear_94_794_0'
                            x1='215.000122'
                            y1='225.000061'
                            x2='215.000122'
                            y2='265.000061'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#5BE584' />
                            <stop offset='1.000000' stopColor='#007B55' />
                          </linearGradient>
                        </defs>
                        <g opacity='0.200000'>
                          <g opacity='0.640000'>
                            <path
                              id='path'
                              d='M0 206.781C0 248.238 14.9453 286.016 39.5391 314.566C67.7534 347.331 108.667 367.931 154.273 368C174.204 368.029 193.262 364.113 210.768 356.964C219.819 353.265 229.95 353.69 238.716 358.071C248.999 363.204 260.514 366.082 272.673 366.082C277.696 366.082 282.615 365.587 287.373 364.648C300.954 361.978 313.313 355.658 323.462 346.708C329.841 341.081 338.01 338.252 346.36 338.262L346.502 338.262C374.091 338.262 399.717 329.53 420.994 314.566C440.015 301.206 455.548 282.87 465.898 261.341C474.92 242.581 480 221.388 480 198.958C480 122.027 420.226 59.6533 346.502 59.6533C338.986 59.6533 331.622 60.3159 324.439 61.5518C305.418 29.4202 271.355 8 232.498 8C216.093 8 200.54 11.8176 186.619 18.6611C173.379 25.1482 161.608 34.3662 151.978 45.6001C119.281 46.144 89.0479 57.2898 64.3032 75.8914C25.3516 105.155 0 152.882 0 206.781Z'
                              fillRule='evenodd'
                              fill='url(#paint_linear_594_1565_0)'
                            />
                          </g>
                        </g>
                        <rect
                          id='character_10'
                          x='297.000000'
                          width='171.000000'
                          height='375.000000'
                          fill='url(#pattern_594_18390)'
                        />
                        <path
                          id='path'
                          d='M240.579 170.701C239.483 170.702 238.417 170.347 237.54 169.689C236.663 169.032 236.024 168.107 235.718 167.055L220.685 113.728C219.781 110.343 217.803 107.343 215.049 105.177C212.294 103.012 208.911 101.8 205.409 101.721L126.938 101.721C123.428 101.786 120.034 102.992 117.27 105.156C114.505 107.32 112.52 110.324 111.613 113.716L96.6284 167.006C96.2168 168.238 95.3472 169.265 94.1997 169.873C93.0522 170.48 91.7144 170.624 90.4644 170.272C89.2139 169.92 88.147 169.101 87.4844 167.984C86.8218 166.867 86.6147 165.538 86.9058 164.272L101.891 110.981C103.401 105.476 106.662 100.611 111.18 97.1206C115.698 93.6306 121.229 91.7048 126.938 91.634L205.409 91.634C211.11 91.718 216.63 93.6511 221.138 97.1423C225.647 100.634 228.899 105.494 230.407 110.994L245.392 164.284C245.751 165.573 245.584 166.952 244.928 168.118C244.272 169.285 243.18 170.144 241.892 170.506C241.465 170.632 241.024 170.697 240.579 170.701Z'
                          fillRule='evenodd'
                          fill='#DFE3E8'
                        />
                        <path
                          id='path'
                          d='M231.501 280.368L100.845 280.368C98.3335 280.368 95.9072 279.452 94.022 277.792C92.1362 276.132 90.9199 273.842 90.6006 271.351L78.4478 175.634L253.85 175.634L241.697 271.351C241.384 273.836 240.176 276.123 238.3 277.782C236.423 279.442 234.006 280.361 231.501 280.368Z'
                          fillRule='evenodd'
                          fill='url(#paint_linear_94_786_0)'
                        />
                        <path
                          id='path'
                          d='M255.151 163.117L77.1963 163.117C71.5649 163.117 67 167.682 67 173.313L67 174.201C67 179.832 71.5649 184.397 77.1963 184.397L255.151 184.397C260.782 184.397 265.347 179.832 265.347 174.201L265.347 173.313C265.347 167.682 260.782 163.117 255.151 163.117Z'
                          fillRule='evenodd'
                          fill='url(#paint_linear_94_787_0)'
                        />
                        <path
                          id='path'
                          d='M115.66 192.017C111.311 192.017 107.772 195.542 107.772 199.892L107.772 258.323C107.772 262.672 111.298 266.198 115.647 266.198C119.997 266.198 123.535 262.672 123.535 258.323L123.535 199.892C123.535 195.542 120.009 192.017 115.66 192.017Z'
                          fillRule='evenodd'
                          fill='#005249'
                        />
                        <path
                          id='path'
                          d='M149.335 192.017C144.986 192.017 141.448 195.542 141.448 199.892L141.448 258.323C141.448 262.672 144.974 266.198 149.323 266.198C153.673 266.198 157.21 262.672 157.21 258.323L157.21 199.892C157.21 195.542 153.685 192.017 149.335 192.017Z'
                          fillRule='evenodd'
                          fill='#005249'
                        />
                        <path
                          id='path'
                          d='M183.023 192.017C178.674 192.017 175.136 195.542 175.136 199.892L175.136 258.323C175.136 262.672 178.662 266.198 183.011 266.198C187.361 266.198 190.898 262.672 190.898 258.323L190.898 199.892C190.898 195.542 187.373 192.017 183.023 192.017Z'
                          fillRule='evenodd'
                          fill='#005249'
                        />
                        <path
                          id='path'
                          d='M216.699 192.017C212.349 192.017 208.812 195.542 208.812 199.892L208.812 258.323C208.812 262.672 212.337 266.198 216.687 266.198C221.036 266.198 224.574 262.672 224.574 258.323L224.574 199.892C224.574 195.542 221.048 192.017 216.699 192.017Z'
                          fillRule='evenodd'
                          fill='#005249'
                        />
                        <path
                          id='path'
                          d='M189.792 88L142.554 88C137.715 88 133.792 91.9231 133.792 96.7622C133.792 101.601 137.715 105.537 142.554 105.537L189.792 105.537C194.632 105.537 198.555 101.614 198.555 96.7744C198.555 91.9351 194.632 88 189.792 88Z'
                          fillRule='evenodd'
                          fill='url(#paint_linear_94_792_0)'
                        />
                        <path
                          id='path'
                          d='M241.289 287.577C265.196 287.577 284.577 268.196 284.577 244.289C284.577 220.381 265.196 201 241.289 201C217.381 201 198 220.381 198 244.289C198 268.196 217.381 287.577 241.289 287.577Z'
                          fillRule='evenodd'
                          fill='#FFFFFF'
                        />
                        <path
                          id='path'
                          d='M230.999 264.002L215.816 247.255C215.256 246.638 214.964 245.823 215.004 244.989C215.044 244.156 215.413 243.373 216.03 242.812L220.249 238.979C220.867 238.418 221.682 238.126 222.515 238.166C223.348 238.206 224.131 238.576 224.692 239.193L233.837 249.258L259.021 225.84C259.632 225.273 260.443 224.972 261.276 225.002C262.109 225.032 262.896 225.391 263.464 226.001L267.341 230.177C267.623 230.479 267.842 230.834 267.987 231.221C268.131 231.608 268.198 232.019 268.183 232.432C268.168 232.845 268.072 233.251 267.9 233.626C267.728 234.002 267.483 234.34 267.18 234.621L235.421 264.152C235.122 264.434 234.77 264.654 234.385 264.799C234 264.945 233.59 265.012 233.179 264.998C232.768 264.984 232.364 264.889 231.99 264.718C231.615 264.547 231.279 264.304 230.999 264.002Z'
                          fillRule='evenodd'
                          fill='url(#paint_linear_94_794_0)'
                        />
                      </svg>

                      {/*  */}
                      <p className='text-center text-sm '>
                        Thanks for placing order
                        <br />
                        <br />
                        <Link href='#' className='text-green-600 text-base'>
                          01dc1370-3df6-11eb-b378-0242ac130002
                        </Link>
                        <br />
                        <br />
                        We will send you a notification within 5 days when it
                        ships.
                        <br />
                        If you have any question or queries then fell to get in
                        contact us.
                        <br />
                        <br />
                        All the best,
                      </p>
                      <div className='flex lg:flex-row flex-col lg:space-x-10 lg:space-y-0 space-y-6 font-medium text-sm'>
                        <Link
                          href='/product'
                          className='px-8 py-3 hover:bg-gray-200 bg-white text-gray-900  border border-gray-900  rounded-full inline-flex items-center transition-all duration-500'>
                          <ChevronLeftIcon className='w-4 h-4 mr-2 -ml-2' />
                          Continue Shopping
                        </Link>
                        {/* <button className='px-8 py-3 bg-gray-900 hover:bg-opacity-80 text-white border border-gray-900  rounded-full inline-flex items-center transition-all duration-500'>
                          <CloudArrowDownIcon className='w-4 h-4 mr-2 -ml-2' />
                          Download as PDF
                        </button> */}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
