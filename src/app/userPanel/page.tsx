'use client'
import Navbar from '@/components/header/Navbar'
import MainLoginPage from '@/components/userPanell/MainLoginPage'
import store from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'


export default function UserPanel() {

   
    
  return (
    <Provider store={store}>
   
    <div className='bg-slate-100'>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
    <MainLoginPage />
       
    </div>

    </Provider>
   
      
   
  )
}
