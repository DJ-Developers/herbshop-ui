'use client'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'

// Icons
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { LogoFull, LogoSimple } from '@/components/logo'
import ShoppingCart from './ShoppingCart'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <header className='top-0 inset-0 z-10 sticky bg-white/75 backdrop-blur-md border-b border-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-4'
        aria-label='Global'>
        <div className='flex lg:flex-1'>
          <LogoFull />
        </div>

        <div className='hidden lg:flex lg:space-x-12 text-base font-medium leading-6 text-gray-600 '>
          <Link href='/about-us' className=' hover:text-gray-900'>
            About us
          </Link>

          <Link href='/product' className=' hover:text-gray-900'>
            Shop
          </Link>

          <Link href='/blog' className=' hover:text-gray-900'>
            Blog
          </Link>
          <Link href='/contact-us' className=' hover:text-gray-900'>
            Contact us
          </Link>
        </div>

        <div className='flex flex-1 justify-end items-center space-x-5 text-gray-500'>
          <button onClick={openModal} className='p-2 relative'>
            <MagnifyingGlassIcon className='w-6 h-6' />
          </button>
          <button
            className='relative p-2 rounded-full'
            onClick={() => setCartOpen(true)}>
            <ShoppingBagIcon className='w-6 h-6' />
            <span className='min-w-5 h-5 px-1.5 flex items-center justify-center text-xs font-medium bg-red-500 text-white absolute top-0 right-0 rounded-full '>
              2
            </span>
          </button>

          {/* Button Menu On Mobile */}
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}>
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
        </div>
      </nav>

      {/* On Moblie */}
      <Transition as={Fragment} show={mobileMenuOpen}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setMobileMenuOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75 transition-opacity' />
          </Transition.Child>
          <div className='fixed top-0 bottom-0 left-0 overflow-hidden'>
            <div className='absolute top-0 bottom-0 left-0 overflow-hidden'>
              <div className='pointer-events-none fixed top-0 bottom-0 right-0 flex max-w-full pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'>
                  <Dialog.Panel className='pointer-events-auto relative w-screen max-w-[280px]'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-in-out duration-500'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in-out duration-500'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'>
                      <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'></div>
                    </Transition.Child>
                    <div className='flex h-full flex-col  bg-white shadow-md'>
                      <div className='py-4 pl-5 pr-4 flex justify-between items-center border-b'>
                        <LogoSimple className='h-8 w-8' />

                        <div className='text-gray-500 flex space-x-4 items-center'>
                          <button
                            type='button'
                            onClick={() => setMobileMenuOpen(false)}>
                            <span className='sr-only'>
                              Close Menu on Mobile
                            </span>
                            <XMarkIcon
                              className='h-6 w-6 text-gray-900'
                              aria-hidden='true'
                            />
                          </button>
                        </div>
                      </div>

                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                        {/* Your content */}
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
      </Transition>

      {/* Search bar */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
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
            <div className='flex min-h-full items-start justify-center p-4 pt-32 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all'>
                  <Combobox>
                    <Combobox.Input
                      placeholder='Find anything ...'
                      className='p-4 pr-12 w-full border-none text-sm font-light leading-5 text-gray-900 focus:ring-0'
                    />
                    <Combobox.Button className='absolute top-3.5 right-4'>
                      <MagnifyingGlassIcon className='w-6 h-6 text-gray-500' />
                    </Combobox.Button>
                  </Combobox>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Show Cart */}

      <ShoppingCart show={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  )
}
