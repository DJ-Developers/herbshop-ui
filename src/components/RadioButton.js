import React from 'react'

export default function RadioButton() {
  return (
    // <div className='inline-flex items-center'>
    //   <label
    //     className='relative flex cursor-pointer items-center rounded-full p-3'
    //     for='html'
    //     data-ripple-dark='true'>
    //     <input
    //       id='html'
    //       name='type'
    //       type='radio'
    //       className="before:content[''] peer relative cursor-pointer appearance-none rounded-full border  text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
    //     />
    //     <div className='pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100'>
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         className='h-3.5 w-3.5'
    //         viewBox='0 0 16 16'
    //         fill='currentColor'>
    //         <circle data-name='ellipse' cx='8' cy='8' r='8'></circle>
    //       </svg>
    //     </div>
    //   </label>

    //   <label
    //     className='mt-px cursor-pointer select-none text-sm font-light text-gray-900'
    //     for='html'>
    //     All
    //   </label>
    // </div>
    <div className='flex flex-col gap-y-4'>
      <div className=' inline-flex items-center'>
        <input type='radio' name='all-cate' id='all-cate' />
        <label
          htmlFor='all-cate'
          className='text-sm font-light text-gray-900 ml-2'>
          All
        </label>
      </div>
      <div className=' inline-flex items-center'>
        <input type='radio' name='all-cate' id='all-cate' />
        <label
          htmlFor='all-cate'
          className='text-sm font-light text-gray-900 ml-2'>
          Kits
        </label>
      </div>
    </div>
  )
}
