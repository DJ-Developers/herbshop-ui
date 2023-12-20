'use client'

import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'
import Link from 'next/link'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]

const POSTS = []

export default function Example() {
  const [selected, setSelected] = useState('')
  const [query, setQuery] = useState('')

  const filteredPost =
    query === ''
      ? POSTS
      : POSTS.filter((post) =>
          post.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className=' w-[260px]'>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative'>
          <div className='w-full p-[9px] pr-[39px] border border-gray-300 rounded-md flex items-center hover:border-gray-900'>
            <div className='ml-1'>
              <MagnifyingGlassIcon
                aria-hidden='true'
                className='w-5 h-5 text-gray-400'
              />
            </div>
            <Combobox.Input
              displayValue={(post) => post.title}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search...'
              className='w-full border-none py-1 px-1.5 placeholder:text-sm placeholder:font-light placeholder:text-gray-400 focus:outline-none focus:ring-0'
            />
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}>
            <Combobox.Options className='absolute z-50 mt-2 max-h-80 w-80 backdrop-blur overflow-auto rounded-md bg-white/75 py-2 text-base ring-1 ring-black/5 focus:outline-none sm:text-sm'>
              {filteredPost.length === 0 && query !== '' ? (
                <div className='relative cursor-default select-none py-2 px-4 text-gray-700 text-center'>
                  <h3 className='font-bold text-base leading-8'> Not Found</h3>
                  No results found for
                  <span className='font-bold'> "{query}"</span>
                  <p>Try checking for typos or using complete words</p>
                </div>
              ) : (
                filteredPost.map((post) => (
                  <Combobox.Option
                    key={post.id}
                    className={({ active }) =>
                      `relative cursor-pointer p-2 ${
                        active ? 'bg-black/5' : ''
                      }`
                    }>
                    {({ selected, active }) => (
                      <Link href={`blog/${post.slug}`}>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 overflow-hidden rounded-lg w-12 h-12'>
                            <Image
                              src={post.cover}
                              alt=''
                              width={0}
                              height={0}
                              sizes='100vw'
                              className='w-full h-full object-cover'
                            />
                          </div>
                          <span className=' line-clamp-2 ml-4 text-sm'>
                            {post.title}
                          </span>
                        </div>
                      </Link>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
