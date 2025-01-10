'use client'
import AAAAAAAAA from '@/components/footer/myBody'
import store from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function page() {
  return (
    <Provider store={store} >

    <div>
        <AAAAAAAAA />
    
    </div>
    </Provider>
  )
}
