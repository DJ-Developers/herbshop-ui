import React from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { XMarkIcon } from '@heroicons/react/24/outline'

import { LogoSimple } from './logo'
import Link from 'next/link'

export default function MenuOnMobile({ show, onClose }) {
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
          <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-900 bg-opacity-75 transition-opacity' />
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
                <Dialog.Panel className='pointer-events-auto w-lvw  bg-white'>
                  <div className='flex h-full flex-col overflow-y-scroll shadow-xl w-[280px]'>
                    <div className='flex items-start justify-between p-4 border-b'>
                      <LogoSimple className='h-8 w-8' />
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
                    <div className='relative mt-8 flex-1 px-4'>
                      <Link
                        onClick={() => setMobileMenuOpen(false)}
                        href='/about-us'
                        className='block px-3 py-2 font-medium  text-gray-900'>
                        About us
                      </Link>
                      <Link
                        onClick={() => setMobileMenuOpen(false)}
                        href='/product'
                        className='block  px-3 py-2  font-medium  text-gray-900'>
                        Shop
                      </Link>
                      <Link
                        onClick={() => setMobileMenuOpen(false)}
                        href='/blog'
                        className='block  px-3 py-2  font-medium  text-gray-900'>
                        Blog
                      </Link>
                      <Link
                        onClick={() => setMobileMenuOpen(false)}
                        href='/contact-us'
                        className='block  px-3 py-2  font-medium  text-gray-900'>
                        Contact us
                      </Link>
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
