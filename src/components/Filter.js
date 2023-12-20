'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RadioGroup } from '@headlessui/react'

// Icons
import {
  FunnelIcon,
  XMarkIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/react/24/outline'
import RadioButton from './RadioButton'

// -------
const categories = [
  {
    id: 1,
    name: 'Tất cả',
  },
  {
    id: 2,
    name: 'Amigurumi',
  },
  {
    id: 3,
    name: 'Hoa móc len',
  },
  {
    id: 4,
    name: 'Kẹp tóc',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Filter() {
  const [open, setOpen] = useState(true)
  const [cate, setCate] = useState(categories[0])

  const closeModal = () => {
    setOpen(false)
  }
  const openModal = () => {
    setOpen(true)
  }

  return (
    <div className=''>
      <button
        type='button'
        onClick={openModal}
        className='flex items-center text-sm font-semibold  hover:bg-gray-100 p-2 rounded-lg'>
        Filters
        <FunnelIcon className='w-5 h-5 ml-2 -mr-1' />
      </button>
      <Transition show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>
          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
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
                    <div className='flex h-full flex-col  bg-white shadow-xl'>
                      <div className='py-4 pl-5 pr-2 flex justify-between items-center border-b'>
                        <Dialog.Title className='text-lg font-bold leading-6 text-gray-900'>
                          Filters
                        </Dialog.Title>
                        <div className='text-gray-500 flex gap-x-4 items-center'>
                          <button type='button' onClick={closeModal}>
                            <span className='sr-only'>Reset Filters</span>
                            <ArrowUturnLeftIcon
                              className='h-5 w-5'
                              aria-hidden='true'
                            />
                          </button>
                          <button type='button' onClick={closeModal}>
                            <span className='sr-only'>Close Filters</span>
                            <XMarkIcon className='h-5 w-5' aria-hidden='true' />
                          </button>
                        </div>
                      </div>

                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                        {/* Your content */}
                        <h6 className='text-sm font-semibold mb-4'>Category</h6>
                        <RadioButton />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
