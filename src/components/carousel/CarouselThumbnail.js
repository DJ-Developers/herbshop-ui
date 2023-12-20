'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CarouselThumbnail({ images = [] }) {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])
  const handlePrevSlide = () => {
    slider1.slickPrev()
  }
  const handleNextSlide = () => {
    slider1.slickNext()
  }

  //   SLIDER SETTING
  const settingsMain = {
    asNavFor: '.slider-nav',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    lazyLoad: true,
    arrows: false,
    beforeChange: (currentSlide, nextSlide) => {
      setCurrentSlide(nextSlide)
    },
    adaptiveHeight: true,
  }
  const settingsThumb = {
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
    arrows: false,
    variableWidth: true,
    adaptiveHeight: true,
  }
  return (
    <div>
      {/* Main Slider */}
      <div className='relative overflow-hidden rounded-2xl mb-6'>
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}>
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt=''
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto object-cover'
            />
          ))}
        </Slider>
        <div className='inline-flex items-center absolute right-4 bottom-4 bg-[#161c247a] rounded-md backdrop-blur text-white p-0.5'>
          <div
            className='mx-1 h-7 flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer'
            onClick={handlePrevSlide}>
            <ChevronLeftIcon className='w-5 h-5' />
          </div>

          <span className='text-sm mx-1'>
            {currentSlide + 1}/{images.length}
          </span>
          <div
            className=' mx-1 h-7 flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer'
            onClick={handleNextSlide}>
            <ChevronRightIcon className='w-5 h-5' />
          </div>
        </div>
      </div>

      {/* Thumbnail Slider */}
      <div className='max-w-sm mx-auto relative'>
        <Slider
          {...settingsThumb}
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}>
          {images.map((image, index) => (
            <div key={index} className='px-1'>
              <div
                className={classNames(
                  'w-16 h-16 rounded-xl overflow-hidden cursor-pointer border ',
                  index === currentSlide
                    ? 'border-green-500 border-2 opacity-100'
                    : 'opacity-[48%]'
                )}>
                <Image
                  src={image}
                  alt=''
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          ))}
        </Slider>
        {/* <div className='absolute w-10 h-full top-0 bg-gradient-to-l from-white/0 to-white'></div>
        <div className='absolute w-10 h-full top-0 right-0 bg-gradient-to-r from-white/0 to-white'></div> */}
      </div>
    </div>
  )
}
