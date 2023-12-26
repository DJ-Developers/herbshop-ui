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
import MenuOnMobile from './MenuOnMobile'

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
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 focus:outline-none'
              onClick={() => setMobileMenuOpen(true)}>
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
        </div>
      </nav>

      {/* On Moblie */}
      <MenuOnMobile
        show={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

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
