import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'

// ------------
import { XMarkIcon } from '@heroicons/react/24/outline'
import { cartItems } from '@/constants'
import { fNumber } from '@/utils/formatNumber'
import { ColorPreview } from './color-utils'

export default function ShoppingCart({ show, onClose }) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed top-0 bottom-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'>
                <Dialog.Panel className='pointer-events-auto w-svw max-w-sm'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-lg font-medium text-gray-900'>
                          Shopping cart
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='relative -m-2 p-2 text-gray-400 hover:text-gray-500  focus:outline-none'
                            onClick={onClose}>
                            <span className='absolute -inset-0.5' />
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>

                      <div className='mt-8'>
                        <div className='flow-root'>
                          <ul
                            role='list'
                            className='-my-6 divide-y divide-gray-200'>
                            {cartItems.map((item, index) => (
                              <li key={index} className='flex py-6'>
                                <div className='h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                  <Image
                                    src={item.imageSrc}
                                    alt={item.productName}
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    className='h-full w-full object-cover object-center'
                                  />
                                </div>

                                <div className='ml-4 flex flex-1 flex-col'>
                                  <div>
                                    <div className='flex justify-between text-sm font-medium text-gray-900'>
                                      <h3>
                                        <Link
                                          href={item.slug}
                                          className=' line-clamp-1'>
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

                                    <div className='flex'>
                                      <button
                                        type='button'
                                        className='font-medium text-lime-600 hover:text-lime-500'>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <p>Subtotal</p>
                        {fNumber(
                          cartItems.reduce(
                            (n, { quantity, price }) => n + quantity * price,
                            0
                          )
                        )}
                      </div>
                      <p className='mt-2 text-xs text-gray-500 font-light'>
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className='mt-6 space-y-6'>
                        <Link
                          onClick={onClose}
                          href='/cart'
                          className='flex items-center justify-center  uppercase rounded-full border border-transparent bg-gray-700 px-6 py-3 text-sm tracking-widest text-white hover:text-gray-900 hover:bg-rose-50 transition-colors duration-300'>
                          View cart
                        </Link>
                        <Link
                          onClick={onClose}
                          href='checkout'
                          className='flex items-center justify-center  uppercase rounded-full  px-6 py-3 text-sm tracking-widest text-gray-900 hover:bg-rose-50 border border-gray-900 hover:border-transparent  transition-colors duration-300'>
                          Check out
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
