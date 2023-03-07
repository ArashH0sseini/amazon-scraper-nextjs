import React from 'react'
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
        <div className='flex flex-col items-center justify-center'>
            <DocumentMagnifyingGlassIcon className='w-64 h-64 text-indigo-600/20' />

            <h1 className='text-3xl mt-2 mb-5 text-black font-bold text-center'>
                Welcome to the Amazon Web Scraper
            </h1>

        </div>
  )
}

export default HomePage;