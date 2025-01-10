'use client';
import Banner from './../../images/Banner.webp'
import WhatRead from './../../images/whatread.jpg'
import Image from 'next/image'
import Icons from './iconsforElement/Icons'

export default function Context() {
  
  return (
    <div className='relative bg-slate-100'>
  
      <p className='z-0 '>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, quisquam ipsum reprehenderit illum itaque dignissimos! Aliquid laudantium asperiores, voluptatum voluptatibus, repellendus in culpa exercitationem veniam, doloribus placeat dolore omnis saepe!
      </p>
      <br />

      <div className='flex mx-32 m-4 relative'>
      <Image  src={Banner} alt="Banner" layout="responsive" width={700} height={475} className="rounded-b-3xl rounded-t-md"/>
        <Icons />
      </div>
      <div className='px-20 py-28'>
      <Image  src={WhatRead} alt="whatread" layout="responsive" width={700} height={475} className="rounded-b-3xl rounded-t-md"/>
      </div>

      {/* <div>
        <BoxReserve />
      </div> */}
    
    
    </div>
  )
}
// 