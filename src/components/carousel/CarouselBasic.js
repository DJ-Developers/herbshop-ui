'use client'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// -------------
import ProductCard from '@/components/card/ProductCard'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CarouselBasic({ data = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }
  const sliderRef = useRef()
  return (
    <div>
      {/* Main Slider */}
      <div className='relative overflow-hidden '>
        <Slider {...settings} ref={sliderRef}>
          {data.map((product) => (
            <div key={product.id} className='lg:px-4 px-3'>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className='p-2 bg-black/50 hover:bg-black/70  text-white rounded-lg absolute top-1/2 left-0'>
          <ChevronLeftIcon className='w-5 h-5' />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className='p-2 bg-black/50 hover:bg-black/70  text-white rounded-lg absolute top-1/2 right-0'>
          <ChevronRightIcon className='w-5 h-5' />
        </button>
      </div>
    </div>
  )
}
