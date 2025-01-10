'use client'

import { getProductre } from '@/redux/hooks/jsonHookReq';
import React, { JSX, useEffect, useState } from 'react'


type re={
  "id":string,
  "stID": string,
  "bookName":string,
  "stName":string,
  "bookID": string,
  "status": false,
}
type allRe ={
  item:re;
  map(arg0: (item: re) => JSX.Element): import("react").ReactNode;
}
export default function SeeRequest() {

    const [request, setRequest] = useState<allRe>();
  
    useEffect(() => {
      getProductre().then((result) => {
        setRequest(result);
      });
    }, []);
  return (
    <div className=''>

      <br />
      <br />

      {
        request?.map((item)=>(
          <div key={item.id} className='bg-slate-200 rounded-md my-4 py-4  mx-16 flex justify-between'>
              <div>
                  <button className='bg-red-500 px-2 py-1 rounded-2xl mx-2'>accept</button>
                  <button className='bg-red-500 px-3 py-1 rounded-2xl mx-1'>reject</button>
              </div>
              <div className='flex'>
                <span className=''>{item.stName} </span>
                <span className='px-2'> درخواست داد برای </span>
                <span className='px-5 pt-1 bg-white rounded-2xl ml-2'>{item.bookName}</span>
                <span className='px-5 pt-1 bg-white rounded-2xl ml-5'> Id:{item.bookID}</span>
              </div>
              
          </div>
        ))
      }
    </div>
  )
}
