import Link from 'next/link'
import React from 'react'

export default function addBook() {
  return (
    <div>
      <Link href={'/addBook'}>
        <div className='ml-1 bg-red-500 p-2 rounded-full hover:bg-red-600 hover:shadow-sm'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>

        </div>
      </Link>
    </div>
  )
}
