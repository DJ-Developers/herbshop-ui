import React from 'react'
import Link from 'next/link'
import PageTitle from '@/components/common/PageTitle'
import Image from 'next/image'

export const metadata = {
  title: 'About us',
}

export default function About() {
  return (
    <div>
      <PageTitle title='About Us' />
      <div className='max-w-7xl mx-auto lg:px-10 px-6  pt-20'>
        <div className='flex lg:flex-row flex-col justify-between gap-y-4'>
          <div className='lg:w-6/12 w-full'>
            <p className='text-sm font-medium mb-5'>
              Hãy sống cuộc sống của bạn.
            </p>
            <p className=' lg:text-[32px] md:text-4xl text-2xl lg:leading-[48px] mb-5'>
              Niềm hạnh phúc khi <br /> tạo ra những tác phẩm nghệ thuật
            </p>
            <p className='font-light mb-10 leading-8'>
              Đó là niềm vui khi cuối cùng bạn đã tự mình làm được điều gì đó
              đẹp đẽ và quan sát nó với cảm giác vô cùng tự hào và thành công.
            </p>

            <Link
              href='/product'
              className=' font-medium text-sm hover:text-gray-600 before:content[""] before:inline-flex before:w-[60px] before:h-0.5 before:bg-gray-600 before:align-middle before:mr-2.5'>
              Learn more
            </Link>
          </div>
          <div className='lg:w-6/12 w-full inline-flex justify-center mb-9'>
            <Image
              src='/about-us-04.jpeg'
              alt=''
              width={470}
              height={530}
              className='object-cover'
            />
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto lg:px-10 px-6 mb-32 mt-10'>
        <div className='flex lg:flex-row flex-col text-center gap-y-10'>
          <div className='lg:w-1/3 w-full mx-auto px-4'>
            <h6 className='mb-2.5 uppercase tracking-widest'>Shipping</h6>
            <p className='text-sm leading-7  font-extralight'>
              Sau khi nhận được đơn đặt hàng, chúng tôi sẽ chuyển sản phẩm của
              bạn trong vòng 3-5 ngày.
            </p>
          </div>
          <div className='lg:w-1/3 w-full mx-auto px-4 lg:border-x'>
            <h6 className='mb-2.5 uppercase tracking-widest'>RETURNS</h6>
            <p className='text-sm leading-7 font-extralight'>
              Chúng tôi chấp nhận trả lại các sản phẩm mới mua trong vòng 7 ngày
              kể từ ngày thanh toán.
            </p>
          </div>
          <div className='lg:w-1/3 w-full mx-auto px-4'>
            <h6 className='mb-2.5 uppercase tracking-widest'>SECURE PAYMENT</h6>
            <div className='flex flex-row justify-center items-center gap-3'>
              <div className=' w-auto h-8'>
                <svg
                  width='100%'
                  height='100%'
                  viewBox='0 0 36 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'>
                  <desc>Payment Visa</desc>
                  <defs>
                    <clipPath id='clip55_467'>
                      <rect
                        id='ic_payment_visa'
                        width='36.000000'
                        height='24.000000'
                        fill='white'
                      />
                    </clipPath>
                  </defs>
                  <g clipPath='url(#clip55_467)'>
                    <rect
                      id='rect'
                      y='0.009766'
                      rx='4.000000'
                      width='36.000000'
                      height='24.000000'
                      fill='#FFFFFF'
                    />
                    <path
                      id='Vector 7'
                      d='M24.1899 14.4498C24.196 12.925 22.9386 12.2665 21.9626 11.7554C21.3448 11.4318 20.84 11.1674 20.84 10.7798C20.84 10.4498 21.16 10.0998 21.84 10.0098C22.6493 9.92969 23.4651 10.0714 24.2 10.4198L24.62 8.41977C23.9036 8.15112 23.1451 8.01229 22.38 8.00977C20.02 8.00977 18.38 9.26977 18.38 11.0698C18.38 12.3998 19.5699 13.1398 20.47 13.5798C21.37 14.0198 21.72 14.3298 21.71 14.7298C21.71 15.3498 20.97 15.6298 20.28 15.6398C19.429 15.6507 18.589 15.4442 17.84 15.0398L17.41 17.0398C18.2574 17.3706 19.1603 17.5369 20.0699 17.5298C22.58 17.5298 24.1801 16.3698 24.1899 14.4498L24.1899 14.4498M17.7 8.16977L15.7 17.4198L13.3 17.4198L15.3 8.16977L17.7 8.16977M27.76 14.1698L29.02 10.6998L29.75 14.1698L27.76 14.1698M32.65 17.4498L30.4301 17.4498L30.14 16.0698L27.13 16.0698L26.64 17.4498L24.12 17.4498L27.71 8.87977C27.8755 8.47202 28.27 8.20378 28.71 8.19977L30.71 8.19977L32.65 17.4498M10.45 17.3898L14.33 8.13976L11.73 8.13976L9.23999 14.4298L8.23999 9.07977C8.15149 8.53611 7.68079 8.13752 7.13 8.13976L3.06 8.13976L3 8.40977C3.81635 8.56949 4.60925 8.83154 5.35999 9.18977C5.67975 9.3401 5.89642 9.64803 5.92999 9.99977L7.83997 17.3898L10.45 17.3898Z'
                      fillRule='evenodd'
                      fill='#2A2A6C'
                    />
                  </g>
                </svg>
              </div>
              <div className=' w-auto h-7'>
                <svg
                  width='100%'
                  height='100%'
                  viewBox='0 0 36 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'>
                  <desc>Payment Master Card</desc>
                  <defs>
                    <clipPath id='clip55_479'>
                      <rect
                        id='ic_payment_mastercard'
                        width='36.000000'
                        height='24.000000'
                        fill='white'
                      />
                    </clipPath>
                  </defs>
                  <g clipPath='url(#clip55_479)'>
                    <rect
                      id='rect'
                      x='12.568359'
                      y='3.280029'
                      width='10.209999'
                      height='16.680000'
                      fill='#F26122'
                    />
                    <path
                      id='path'
                      d='M13.6687 11.6199C13.6519 8.37347 15.1263 5.29898 17.6687 3.27993C13.3188 -0.140774 7.07068 0.355951 3.31604 4.42094C-0.438721 8.48592 -0.438721 14.7539 3.31604 18.8189C7.07068 22.8839 13.3188 23.3806 17.6687 19.9599C15.1263 17.9409 13.6519 14.8664 13.6687 11.6199Z'
                      fillRule='evenodd'
                      fill='#EA1D25'
                    />
                    <path
                      id='path'
                      d='M34.829 11.6199C34.8263 15.6792 32.5078 19.3813 28.8568 21.1557C25.2058 22.9301 20.8624 22.4659 17.6689 19.9599C22.269 16.3378 23.0657 9.67415 19.449 5.06986C18.9305 4.40313 18.3329 3.80204 17.6689 3.27986C20.8624 0.773853 25.2058 0.309602 28.8568 2.08403C32.5078 3.85846 34.8263 7.56051 34.829 11.6199Z'
                      fillRule='evenodd'
                      fill='#F69E1E'
                    />
                  </g>
                </svg>
              </div>
              <div className=' w-auto h-7'>
                <svg
                  width='100%'
                  height='100%'
                  viewBox='0 0 36 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'>
                  <desc>Payment Paypal</desc>
                  <defs>
                    <clipPath id='clip55_474'>
                      <rect
                        id='ic_payment_paypal'
                        width='36.000000'
                        height='24.000000'
                        fill='white'
                      />
                    </clipPath>
                  </defs>
                  <g clipPath='url(#clip55_474)'>
                    <rect
                      id='rect'
                      y='0.009766'
                      rx='4.000000'
                      width='36.000000'
                      height='24.000000'
                      fill='#FFFFFF'
                    />
                    <path
                      id='path'
                      d='M14.3405 21.3297L14.6904 19.1297L13.9105 19.1297L10.2305 19.1297L12.7905 2.8697C12.7972 2.81932 12.8221 2.77313 12.8605 2.7397C12.9006 2.70863 12.9497 2.69113 13.0005 2.6897L19.2104 2.6897C21.2805 2.6897 22.7004 3.1197 23.4504 3.9697C23.7822 4.32623 24.0134 4.7645 24.1205 5.2397C24.2371 5.8172 24.2371 6.41219 24.1205 6.9897L24.1205 7.4897L24.4705 7.6897C24.7368 7.8225 24.9774 8.00201 25.1804 8.2197C25.4861 8.58869 25.6835 9.03525 25.7505 9.5097C25.8253 10.1299 25.7983 10.7582 25.6704 11.3697C25.5386 12.1125 25.278 12.8265 24.9005 13.4797C24.5953 14.0033 24.183 14.4566 23.6904 14.8097C23.1947 15.1478 22.6428 15.3949 22.0604 15.5397C21.4067 15.7046 20.7346 15.7853 20.0604 15.7797L19.5704 15.7797C19.2269 15.7797 18.8944 15.9 18.6305 16.1197C18.3651 16.3433 18.1908 16.6563 18.1405 16.9997L18.1405 17.1997L17.5305 21.0797L17.5305 21.2297L14.3405 21.3297Z'
                      fillRule='evenodd'
                      fill='#253D80'
                    />
                    <path
                      id='path'
                      d='M24.8002 7.08984L24.7402 7.45984C23.9202 11.6598 21.1102 13.1198 17.5303 13.1198L15.7102 13.1198C15.2725 13.1193 14.8992 13.4374 14.8302 13.8698L13.9003 19.7898L13.6302 21.4698C13.61 21.6044 13.649 21.7411 13.7372 21.8446C13.8254 21.9482 13.9542 22.0085 14.0902 22.0098L17.3302 22.0098C17.7145 22.0095 18.0411 21.7295 18.1002 21.3498L18.1002 21.1898L18.7102 17.3198L18.7102 17.1098C18.7648 16.7318 19.0884 16.4509 19.4702 16.4498L20.0002 16.4498C23.1302 16.4498 25.5902 15.1798 26.3002 11.4498C26.6844 10.175 26.4474 8.79372 25.6603 7.71984C25.4105 7.46366 25.1199 7.25076 24.8002 7.08984Z'
                      fillRule='evenodd'
                      fill='#189BD7'
                    />
                    <path
                      id='path'
                      d='M23.9404 6.74985L23.5604 6.64985L23.1404 6.56985C22.6108 6.49067 22.0758 6.45388 21.5404 6.45985L16.6604 6.45985C16.5464 6.45673 16.4333 6.48072 16.3304 6.52985C16.0985 6.63841 15.9369 6.85643 15.9004 7.10985L14.9004 13.6799L14.9004 13.8699C14.9692 13.4374 15.3425 13.1193 15.7804 13.1199L17.6003 13.1199C21.1804 13.1199 23.9904 11.6599 24.8104 7.45985L24.8704 7.08985C24.655 6.97855 24.4309 6.8849 24.2004 6.80985L23.9404 6.74985Z'
                      fillRule='evenodd'
                      fill='#242E65'
                    />
                    <path
                      id='path'
                      d='M15.9004 7.10977C15.9369 6.85634 16.0985 6.63833 16.3304 6.52977C16.4333 6.48063 16.5464 6.45664 16.6604 6.45977L21.5404 6.45977C22.0758 6.45379 22.6108 6.49058 23.1404 6.56977L23.5604 6.64977L23.9404 6.74977L24.1304 6.80977C24.3608 6.88482 24.585 6.97846 24.8004 7.08977C25.1254 5.84039 24.8275 4.51095 24.0004 3.51977C23.0004 2.45977 21.3604 2.00977 19.2205 2.00977L13.0004 2.00977C12.5625 2.00923 12.1893 2.32732 12.1204 2.75977L9.5304 19.1698C9.5072 19.3245 9.55225 19.4817 9.65393 19.6007C9.75562 19.7196 9.90393 19.7886 10.0604 19.7898L13.9004 19.7898L14.9004 13.6798L15.9004 7.10977Z'
                      fillRule='evenodd'
                      fill='#253D80'
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto lg:px-10 px-6'>
        <div className=' bg-[url("/blog-thumbnail.jpeg")] w-full lg:h-[564px] h-[260px] bg-no-repeat bg-cover bg-center'>
          <div className='w-full h-full flex justify-center items-center'>
            <Link href='#'>
              <Image
                src='/button-play-alt.png'
                alt=''
                width={96}
                height={96}
                className='hover:scale-110 transition-transform duration-500'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto lg:px-10 px-6 lg:pt-32 pt-20 pb-20 '>
        <div className=' flex lg:flex-row flex-col gap-y-8'>
          <div className='lg:w-1/3 w-full'>
            <h6 className='lg:text-4xl text-3xl lg:leading-[56px] font-light'>
              Sự khác biệt <br /> khi bạn mua sắm Herbshop!
            </h6>
          </div>
          <div className='lg:w-1/3 w-full flex flex-col  lg:px-5'>
            <div>
              <h6 className='mb-4 font-semibold'>Chuyển phát nhanh</h6>
              <p className='text-sm leading-7 font-extralight mb-9'>
                Sau khi nhận được đơn đặt hàng của bạn, chúng tôi sẽ chuyển sản
                phẩm của bạn trong vòng 3-5 ngày.
              </p>
            </div>
            <div>
              <h6 className='mb-4 font-semibold'>Chất lượng tuyệt vời</h6>
              <p className='text-sm leading-7  font-extralight mb-9'>
                Chúng tôi cam kết rằng chất lượng sản phẩm của chúng tôi sẽ và
                sẽ luôn ở mức tuyệt vời.
              </p>
            </div>
          </div>
          <div className='lg:w-1/3 w-full flex flex-col lg:px-5'>
            <div>
              <h6 className='mb-4 font-semibold'>Trả lại miễn phí</h6>
              <p className='text-sm leading-7  font-extralight mb-9'>
                Chúng tôi chấp nhận trả lại các sản phẩm mới mua trong vòng 7
                ngày kể từ ngày thanh toán.
              </p>
            </div>
            <div>
              <h6 className='mb-4 font-semibold'>Gói miễn phí</h6>
              <p className='text-sm leading-7  font-extralight mb-9'>
                Khi có yêu cầu, các mặt hàng mua làm quà tặng từ cửa hàng chúng
                tôi có thể được miễn phí dịch vụ gói hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
