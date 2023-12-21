import React from 'react'
import PageTitle from '@/components/common/PageTitle'
import { PhoneIcon, ClockIcon, MapPinIcon } from '@heroicons/react/20/solid'
export const metadata = {
  title: 'Contact us',
}

export default function Contact() {
  return (
    <div>
      <PageTitle title='Contact Us' />
      <div className='max-w-7xl mx-auto px-6 lg:px-10 text-center py-24'>
        <p className='text-4xl mb-8'>Keep in touch with us</p>
        <p className='text-sm font-light leading-8 max-w-xl mx-auto'>
          Been tearing your hair out to find the perfect gift for your loved
          ones? Try visiting our nationwide local stores. You can also contact
          us to become partner or distributor. Call us, send us an email or make
          an appointment now.
        </p>
      </div>
      <div className='max-w-7xl mx-auto lg:px-10 px-6'>
        <div className='flex lg:flex-row flex-col lg:gap-x-20 gap-y-10 justify-between'>
          <div className='flex items-start gap-5'>
            <div className='bg-gray-900 p-8'>
              <MapPinIcon className='w-7 h-7 text-white' />
            </div>
            <div className='text-gray-900'>
              <p className='font-medium mb-3'>ADDRESS</p>
              <p className=' '>+ Online store</p>
            </div>
          </div>
          <div className='flex items-start gap-5'>
            <div className='bg-gray-900 p-8'>
              <PhoneIcon className='w-7 h-7 text-white' />
            </div>
            <div className='font-extralight text-gray-500 '>
              <p className='font-medium mb-3 text-gray-900'>CONTACT</p>
              <p className='leading-8'>Mobile: (+84) 90 xxx xxx</p>
              <p className='leading-8'>Mail: contact@herbshop.vn</p>
            </div>
          </div>
          <div className='flex items-start gap-5'>
            <div className='bg-gray-900 p-8'>
              <ClockIcon className='w-7 h-7 text-white' />
            </div>
            <div className='font-extralight text-gray-500  '>
              <p className='font-medium mb-3 text-gray-900'>
                HOUR OF OPERATION
              </p>
              <p className='leading-8 lg:text-base text-xs'>
                Monday - Friday: 09:00 - 20:00
              </p>
              <p className='leading-8 lg:text-base text-xs'>
                Saturday & Sunday : 10:30 - 22:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className='max-w-7xl mx-auto lg:px-10 px-6'>
        <div className='w-full flex flex-col items-center py-28 '>
          <p className='text-3xl mb-10'>Send a message</p>
          <form className='grid lg:grid-cols-2 lg:gap-x-8 gap-y-8 w-full max-w-2xl'>
            <input
              type='text'
              name='name'
              required
              placeholder='Name'
              className='w-full pl-0 pb-3  focus:ring-0 border-x-0 border-t-0 text-sm text-gray-900 placeholder:text-gray-600 focus:border-lime-600 placeholder:font-medium'
            />
            <input
              type='email'
              name='email'
              required
              placeholder='Email address'
              className='w-full pl-0 pb-3 focus:ring-0 border-x-0 border-t-0 text-sm text-gray-900 placeholder:text-gray-600 focus:border-lime-600 placeholder:font-medium'
            />
            <textarea
              type='text'
              name='message'
              required
              placeholder='Message'
              rows={10}
              className='w-full pl-0 pb-3 lg:col-span-2 focus:ring-0 border-x-0 border-t-0 text-sm text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:border-lime-600'
            />
          </form>
          <button className='bg-gray-900 border border-gray-900 text-white px-8 py-3 rounded-full mt-10 uppercase hover:bg-white hover:text-gray-900 transition-all duration-500'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
