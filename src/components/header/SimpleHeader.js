'use client'

import React from 'react'

import { LogoSimple } from '@/components/logo'

export default function SimpleHeader() {
  return (
    <header className='bg-white'>
      <nav className='flex justify-between items-center max-w-7xl mx-auto p-6'>
        <LogoSimple />
        <p className='text-sm font-medium'>Need help ?</p>
      </nav>
    </header>
  )
}
