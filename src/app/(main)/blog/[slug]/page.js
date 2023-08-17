import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Components
import { LogoSimple } from '@/components/logo'
import { Facebook, Instagram, Linkin, Twitter } from '@/components/icons'
import { POSTS } from '@/constants'
import PostCard from '@/components/card/PostCard'

export default function SinglePostPage() {
  return (
    <div>
      {/* COVER IMAGE */}
      <div className='relative before:absolute before:content-["] before:w-full before:h-full before:top-0 before:left-0 before:bg-gray-900/70'>
        <Image
          src='/post/cover_8.jpeg'
          alt=''
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-[480px] object-cover'
        />
        <div className='absolute top-0 w-full h-full'>
          <div className=' max-w-6xl m-auto px-6 relative h-full'>
            <h1 className='text-white text-3xl font-bold pt-16 max-w-md'>
              10 Essential Tips for Healthy Living
            </h1>
            <div className='absolute bottom-0 w-full'>
              <div className='pb-16 flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center'>
                  <div className='bg-white rounded-full'>
                    <LogoSimple disabledLink={true} className=' p-1.5' />
                  </div>
                  <div className=' ml-4'>
                    <p className='text-white'>herbshop</p>
                    <p className='text-sm text-white/80'>10 Jun 2023</p>
                  </div>
                </div>
                <div className='flex flex-row gap-4'>
                  <Facebook />
                  <Instagram />
                  <Twitter />
                  <Linkin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BREADRUMBS */}
      <div className='w-full m-auto px-4 py-6 mb-10 border-b'>
        <div className='max-w-3xl m-auto'>
          <nav aria-label='Breadcrumb' className='text-sm font-normal'>
            <ol className='flex items-center'>
              <li>
                <Link href='/' className='hover:underline'>
                  Home
                </Link>
              </li>
              <li>
                <div className='h-1 w-1 bg-gray-400 rounded-full mx-4' />
              </li>
              <li>
                <Link href='/blog' className='hover:underline'>
                  Blog
                </Link>
              </li>
              <div className='h-1 w-1 bg-gray-400 rounded-full mx-4' />
              <li>
                <div className='text-gray-400'>
                  10 Essential Tips for Healthy Living
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* CONTENS */}
      <div className='max-w-3xl m-auto'>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <br />
        <h2 className='text-3xl'>Paragraph</h2>
        <br />
        <p>What is MTAweb Directory?</p>
        <br />
        <p>
          So you have heard about this site or you have been to it, but you
          cannot figure out what it is or what it can do. MTA web directory is
          the simplest way in which one can bid on a link, or a few links if
          they wish to do so. The link directory on MTA displays all of the
          links it currently has, and does so in alphabetical order, which makes
          it much easier for someone to find what they are looking for if it is
          something specific and they do not want to go through all the other
          sites and links as well. It allows you to start your bid at the bottom
          and slowly work your way to the top of the list.
        </p>
        <br />
        <p>
          With a very low costing starting bid of just $1, you are guaranteed to
          have a spot in MTA’s successful directory list. When you would like to
          increase your bid to one of the top positions, you have to know that
          this would be a wise decision to make as it will not only get your
          link to be at a higher point in the directory but it will also give
          you a chance to have your site advertised with the rest of the top ten
          on the home page of the website. This means that when visitors come to
          MTAweb.com, your site will be one of the first things they see. In
          other words, you stand a great chance at getting a comeback to your
          site sooner than you thought.
        </p>
      </div>

      {/* RECENTS POST */}
      <div className='max-w-7xl m-auto px-6 pb-32 pt-20'>
        <h4 className='text-2xl font-semibold mb-10'>Recents Post</h4>
        <div className='grid grid-cols-4 gap-6'>
          {POSTS.slice(0, 4).map((post) => (
            <PostCard key={post.id} data={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
