import React from 'react'
import Image from 'next/image'

const brands = [
  {
    id: 1,
    title: 'amazon',
    url: '/about/ic_brand_amazon.svg',
  },
  {
    id: 2,
    title: 'hbo',
    url: '/about/ic_brand_hbo.svg',
  },
  {
    id: 3,
    title: 'ibm',
    url: '/about/ic_brand_ibm.svg',
  },
  {
    id: 4,
    title: 'netflix',
    url: '/about/ic_brand_netflix.svg',
  },
  {
    id: 5,
    title: 'spotify',
    url: '/about/ic_brand_spotify.svg',
  },
]

export default function Vision() {
  return (
    <div className='bg-gray-100 relative before:content-[""] before:absolute before:w-full before:h-[120px] before:top-0 before:left-0 before:bg-white'>
      <div className='max-w-7xl m-auto px-6 pb-20'>
        <div className='relative mb-20'>
          <Image
            src='/about/vision.jpg'
            alt='Vision'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-auto rounded-2xl'
          />
          <div className='flex flex-row absolute bottom-0 py-5 opacity-40 justify-center w-full'>
            {brands.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.url}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-full h-8 m-5'
                />
              </div>
            ))}
          </div>
        </div>
        <h3 className='max-w-3xl mx-auto text-center text-3xl'>
          Our vision offering the best product nulla vehicula tortor scelerisque
          ultrices malesuada.
        </h3>
      </div>
    </div>
  )
}
