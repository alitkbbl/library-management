import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (

    <Link href={'/'}>
      <div className='mr-9 py-2 flex text-2xl bg-white px-12 rounded-3xl text-gray-800 shadow-lg'>
        <h2>مدیریت یک کتابخانه</h2>
    </div>
    </Link>
    
 
  )
}
