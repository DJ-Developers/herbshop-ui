import React from 'react'
import Image from 'next/image'
import TeamCard from '@/components/card/TeamCard'

export const metadata = {
  title: 'About us',
}

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
const teams = [
  {
    id: '1',
    name: 'Lucian Obrien',
    role: 'Data Analyst',
    avatar: '/about/team_1.jpeg',
  },
  {
    id: '2',
    name: 'Deja Brady',
    role: 'Trainee',
    avatar: '/about/team_2.jpeg',
  },
  {
    id: '3',
    name: 'Harrison Stein',
    role: 'Director',
    avatar: '/about/team_3.jpeg',
  },
  {
    id: '4',
    name: 'Jayvion Simon',
    role: 'Intern',
    avatar: '/about/team_4.jpeg',
  },
]
export default function About() {
  return (
    <div>
      {/* HERO */}
      <div className='relative before:absolute before:content-["] before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-tr from-black to-black/50'>
        <Image
          src='/about/hero.jpeg'
          alt='hero about'
          sizes='100vw'
          width={0}
          height={0}
          priority
          className='object-cover h-auto w-full'
        />
        <div className='max-w-7xl m-auto px-6'>
          <div className=' absolute bottom-20'>
            <h1 className='text-green-700 text-7xl font-bold'>Who</h1>
            <h1 className='text-white text-7xl font-bold'>we are?</h1>
            <h4 className='text-white text-2xl max-w-sm mt-4'>
              Let's work together and make awesome site easily
            </h4>
          </div>
        </div>
      </div>

      {/* WORK WITH US */}
      <div className='max-w-7xl m-auto px-6 py-32'>
        <div className='grid grid-cols-2 gap-x-6'>
          <div className='grid grid-cols-2 gap-x-6 items-center pr-14 pl-3'>
            <Image
              src='/about/what_2.jpeg'
              sizes='100vw'
              alt=''
              width={0}
              height={0}
              className=' w-full h-auto rounded-2xl aspect-square'
            />
            <Image
              src='/about/what_1.jpeg'
              width={0}
              height={0}
              sizes='100vw'
              alt=''
              className='w-full h-auto rounded-2xl'
            />
          </div>
          <div>
            <h2 className='text-5xl font-bold mb-6'>Work with us</h2>
            <p className='text-gray-600'>
              Our theme is the most advanced and user-friendly theme you will
              find on the market, we have documentation and video to help set
              your site really easily, pre-installed demos you can import in one
              click and everything from the theme options to page content can be
              edited from the front-end. This is the theme you are looking for.
            </p>
          </div>
        </div>
      </div>

      {/* VISION */}
      <div className='bg-gray-100 relative before:content-[""] before:absolute before:w-full before:h-[120px] before:top-0 before:left-0 before:bg-white'>
        <div className='max-w-7xl m-auto px-6 pb-20'>
          <div className='relative mb-20 '>
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
            Our vision offering the best product nulla vehicula tortor
            scelerisque ultrices malesuada.
          </h3>
        </div>
      </div>

      {/* TEAM */}
      <div className=' max-w-7xl m-auto px-6 py-24'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <span className='uppercase text-xs font-bold text-gray-500'>
            Dream Team
          </span>
          <h2 className='text-5xl font-extrabold'>Great team is the key</h2>
          <p className='text-gray-500 max-w-xl text-center'>
            We will provide you support if you have any problems, our support
            team will reply within a day and we also have detailed
            documentation.
          </p>
        </div>
        <div className='grid grid-cols-4 gap-6 py-20'>
          {teams.map((item) => (
            <TeamCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
