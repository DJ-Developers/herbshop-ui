import PostLargeCard from '@/components/card/PostLargeCard'
import { POSTS } from '@/constants'
import React from 'react'

export default function Blog() {
  return (
    <div className='max-w-7xl m-auto px-6'>
      <h4 className='my-10 text-2xl font-semibold'>Blog</h4>
      <div className='grid grid-cols-4 gap-6 py-20'>
        {POSTS.map((post, index) => (
          <PostLargeCard key={post.id} data={post} index={index} />
        ))}
      </div>
    </div>
  )
}
