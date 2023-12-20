import PageTitle from '@/components/common/PageTitle'
import React from 'react'

export const metadata = {
  title: 'Order Tracking',
}

export default function OrderTracking() {
  return (
    <div>
      <PageTitle title='Order Tracking' />
      <div className='max-w-7xl mx-auto lg:px-10 px-6'>
        <div className='pt-24 pb-28'>
          <form className='max-w-[630px] mx-auto lg:p-16 p-10 bg-[#f7f7f7]'>
            <p className='text-sm leading-7 font-medium text-gray-600 mb-6'>
              Để theo dõi đơn hàng của bạn, vui lòng nhập ID đơn hàng của bạn
              vào ô bên dưới và nhấn nút "Theo dõi". Điều này đã được trao cho
              bạn trên biên nhận của bạn và trong email xác nhận mà lẽ ra bạn
              phải nhận được.
            </p>
            <p className='mb-8'>
              <label htmlFor='orderid' className='text-xl font-medium'>
                ID đơn hàng
              </label>
              <input
                type='text'
                name='orderid'
                id='orderid'
                required
                placeholder='Tìm thấy trong email xác nhận đặt hàng của bạn'
                className='w-full mt-3 pl-0 py-3 bg-transparent  focus:ring-0 border-x-0 border-t-0 border-b-2 border-gray-300 text-xs text-gray-900 placeholder:text-gray-600 focus:border-gray-900 placeholder:font-medium transition-colors duration-300'
              />
            </p>
            <p className='mb-8'>
              <label htmlFor='order_email' className='text-xl font-medium'>
                Billing email
              </label>
              <input
                type='text'
                name='order_email'
                id='order_email'
                required
                placeholder='Email bạn đã sử dụng trong quá trình thanh toán.'
                className='w-full mt-3 pl-0 py-3 bg-transparent  focus:ring-0 border-x-0 border-t-0 border-b-2 border-gray-300 text-xs text-gray-900 placeholder:text-gray-600 focus:border-gray-900 placeholder:font-medium transition-colors duration-300'
              />
            </p>
            <button className='bg-gray-900 border border-gray-900 text-white px-16 py-4 rounded-full mt-10  hover:bg-white hover:text-gray-900 transition-all duration-500'>
              Theo dõi
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
