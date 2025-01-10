import React from 'react'
import EditIcon from './icons/EditIcon'
import Delete from './icons/Delete'

type a={
    number:number
    id:string
}
export default function LeftMenu({number,id}:a) {
  return (
    <div className='mt-8 ml-1'>
        <div >
            <span className='flex-auto ml-3 mt-3 py-6 px-6 mb-2 rounded-full bg-red-500 shadow-lg text-white font-bold text-xl'>{number}</span>
        </div>
        <div className=' mt-24 mr-4 '>
            <div className='mb-2 '>
                <EditIcon />
            </div>
            <div >
                <Delete/>
            </div>
        </div>

    </div>
  )
}
