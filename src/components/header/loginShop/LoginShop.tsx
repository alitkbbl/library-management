import React from 'react'
import ShopingBag from './ShopingBag'
import Login from './Login'

export default function LoginShop() {
  return (
    <div className='flex '>
      <div className='mx-2 bg-customPurple rounded-lg px-4 py-2 text-white hover:scale-105 transition duration-300 ease-in-out hover:bg-indigo-800'>
        <Login />
      </div>
      <div className='mx-2'>
        <ShopingBag />
      </div>
    </div>
  )
}
