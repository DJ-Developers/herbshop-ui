'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'

export default function SortBy({ data = [] }) {
  const [selected, setSelected] = useState(data[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative'>
        <Listbox.Button className='text-sm flex items-center hover:bg-gray-100 p-2 rounded-md'>
          Sort By: &nbsp;
          <span className=' font-semibold'>{selected.name}</span>
          <ChevronDownIcon className='w-5 h-5 ml-2 -mr-1' />
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <Listbox.Options className='absolute mt-1 max-h-60 w-[150px] z-50 overflow-auto rounded-md bg-white/75 backdrop-blur py-1 text-base ring-1 ring-black/5 focus:outline-none sm:text-sm'>
            {data.map((sortBy, index) => (
              <Listbox.Option
                key={index}
                className={({ active, selected }) =>
                  `relative cursor-pointer select-none px-4 py-2 ${
                    active ? 'bg-black/5' : ''
                  } ${selected ? 'bg-black/10' : ''}`
                }
                value={sortBy}>
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-light'
                      }`}>
                      {sortBy.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
