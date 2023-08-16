import PostCard from '@/components/card/PostCard'
import PostCardHorizontal from '@/components/card/PostCardHorizontal'
import Image from 'next/image'

import PostLargeCard from '@/components/card/PostLargeCard'
import { POSTS, PRODUCTS } from '@/constants'
import ProductCard from '@/components/card/ProductCard'

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <div className='relative'>
        <Image
          src='/home/slide2.jpg'
          alt=''
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto object-cover'
        />
      </div>

      {/* FEATURED PRODUCTS */}
      <div className='max-w-7xl m-auto px-6 py-24 flex flex-col items-center'>
        <h3 className='text-3xl'>FEATURED PRODUCTS</h3>
        <p className='text-gray-400 text-sm font-light mt-2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <div className='grid grid-cols-4 gap-6 pt-20 w-full'>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className='max-w-7xl m-auto px-6 py-24 flex flex-col items-center'>
        <h5 className='text-xl'>Latest blogs</h5>
        <h3 className='text-3xl'>THIS WEEK'S TOP PICKS</h3>
        <div className='grid grid-cols-4 gap-6 pt-20 w-full'>
          {POSTS.slice(0, 7).map((post, index) => (
            <PostLargeCard data={post} index={index} key={post.id} />
          ))}
        </div>
      </div>
      <div className='max-w-7xl m-auto px-6 py-24 flex flex-col items-center'>
        <h5 className='text-xl'>Latest blogs</h5>
        <h3 className='text-3xl'>THIS WEEK'S TOP PICKS</h3>
        <div className='grid grid-cols-4 gap-6 pt-20'>
          {POSTS.slice(0, 4).map((post) => (
            <PostCard key={post.id} data={post} />
          ))}
        </div>
      </div>
      <div className='max-w-7xl m-auto px-6 py-24 flex flex-col items-center'>
        <h5 className='text-xl'>Latest blogs</h5>
        <h3 className='text-3xl'>THIS WEEK'S TOP PICKS</h3>
        <div className='grid grid-cols-2 gap-10 pt-20'>
          {POSTS.slice(0, 4).map((post) => (
            <PostCardHorizontal key={post.id} data={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
