'use client'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import {
  Combobox,
  Dialog,
  Disclosure,
  Popover,
  Transition,
} from '@headlessui/react'

// Icons
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid'

import { LogoFull } from '@/components/logo'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

        <Popover.Group className='hidden lg:flex lg:gap-x-12 text-base font-medium leading-6 text-gray-600 '>
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
        </Popover.Group>

        <div className='flex flex-1 justify-end items-center gap-6 text-gray-500'>
          <button onClick={openModal} className='p-2 relative'>
            <MagnifyingGlassIcon className='w-6 h-6' />
          </button>
          <button className='relative p-2 rounded-full'>
            <ShoppingBagIcon className='w-6 h-6' />
            <span className='min-w-5 h-5 px-1.5 flex items-center justify-center text-xs font-medium bg-red-500 text-white absolute top-0 right-0 rounded-full '>
              2
            </span>
          </button>
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

      {/* On Mobile */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <LogoFull />
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href='/about'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                  About us
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href='/product'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                  Shop
                </Link>

                {/* <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {products.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}

                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href='/blog'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                  Blog
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href='/contact'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

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
            <div className='fixed inset-0 bg-slate-900/25 backdrop-blur' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
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
    </header>
  )
}
