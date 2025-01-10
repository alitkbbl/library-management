import React from 'react'
import Medal from './Medal'
import Feather from './Feather'
import Cap from './Cap'
import Flag from './Flag'
import Star from './Star'
import Books from './Books'

export default function Icons() {
  return (
    <ul className='  absolute -bottom-20 right-60 flex gap-6   text-gray-700 font-semibold text-xl'>
      <li className=''> 
        <Medal />
        <span className='pr-3'>جوایز ادبی </span>
      </li>
      <li> 
        <Feather />
        <span className='pr-1'>انواع داستان</span>
      </li>
      <li> 
        <Cap />
        <span className='pr-3'>مکاتب ادبی</span>
        </li>
      <li> 
        <Flag />
        <span className='pr-1'>ادبیات جهان</span>
      </li>
      <li> 
        <Star />
        <span className='pr-3'>برگزیدگان</span>
        </li>
      <li> 
        <Books />
        <span className='pr-4'>موضوعی</span>
        </li>
    </ul>
  )
}
