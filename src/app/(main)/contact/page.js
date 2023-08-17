import React from 'react'
import Image from 'next/image'

export default function Contact() {
  return (
    <div>
      {/* HERO */}
      <div className='relative before:absolute before:content-["] before:w-full before:h-full before:top-0 before:left-0 before:bg-gray-900/70'>
        <Image
          src='/contact/hero.jpeg'
          alt='contact hero'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto object-cover'
        />
        <div className='max-w-7xl m-auto px-6'>
          <div className=' absolute bottom-20'>
            <h1 className='text-green-600 text-7xl font-bold'>Where</h1>
            <h1 className='text-white text-6xl font-semibold'>to find us?</h1>
            <div className='mt-10'>
              <p className=' text-lg text-white font-medium mb-1'>
                Ho Chi Minh
              </p>
              <p className='text-white/80 text-sm'>
                187/5 Vo Van Ngan, Linh Chieu, Tp. Thu Duc,
                <br /> 090 xxx xxx
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className='grid grid-cols-2 gap-20 max-w-7xl m-auto px-6 py-20'>
        {/* FORM SUBMIT */}
        <div className='flex flex-col gap-10'>
          <h3 className='text-3xl font-semibold leading-10'>
            Feel free to contact us. <br />
            We&apos;ll be glad to hear from you, <br /> buddy.
          </h3>
          <div className='flex flex-col gap-6'>
            <div>
              <input
                type='text'
                name='full-name'
                id='full-name'
                placeholder='Name'
                className='py-3 px-[14px] w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'
              />
            </div>
            <div>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='Email'
                className='py-3 px-[14px] w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'
              />
            </div>
            <div>
              <input
                type='text'
                name='subject'
                id='subject'
                placeholder='Subject'
                className='py-3 px-[14px] w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'
              />
            </div>
            <div>
              <textarea
                rows={4}
                name='message'
                id='message'
                placeholder='Enter your message here.'
                className=' resize-none py-3 px-[14px] w-full rounded-md border-gray-300 placeholder:text-gray-400 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-0 focus:border-gray-900'
              />
            </div>
          </div>

          <div>
            <button className='text-white bg-gray-900 px-[22px] py-[11px] rounded-lg capitalize'>
              submit now
            </button>
          </div>
        </div>

        {/* GOOGLE MAP */}
      </div>
    </div>
  )
}
