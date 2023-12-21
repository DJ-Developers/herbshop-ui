import React from 'react'

export default function Countdown() {
  return (
    <div className='flex justify-between'>
      <div className='text-center'>
        <p className=' text-4xl leading-normal font-bold p-4'>0</p>
        <p className=' text-gray-500'>DAYS</p>
      </div>
      <div className='text-center'>
        <p className=' text-4xl leading-normal font-bold p-4'>0</p>
        <p className=' text-gray-500'>HOURS</p>
      </div>
      <div className='text-center'>
        <p className=' text-4xl leading-normal font-bold p-4'>0</p>
        <p className=' text-gray-500'>MINUSTES</p>
      </div>
      <div className='text-center'>
        <p className=' text-4xl leading-normal font-bold p-4'>0</p>
        <p className=' text-gray-500'>SECONDS</p>
      </div>
    </div>
  )
}
