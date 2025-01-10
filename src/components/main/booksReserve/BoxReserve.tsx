import React from 'react'
import Resers from './Resers'
import AddRequest from './AddRequest'

export default function BoxReserve() {
  return (
    <div className='bg-slate-200 m-10 mt-1 rounded-3xl'>
      <div className=' flex justify-between '>
          <span className='mr-7 font-semibold mt-4 mb-2 text-3xl'>کتاب های در حال مطالعه </span>
          <div className='ml-8 mt-4 '>
            <AddRequest />
          </div>
      </div>
      <div className=' mx-3 my-2 rounded-md '>
        <Resers />
      </div>

    </div>
  )
}
