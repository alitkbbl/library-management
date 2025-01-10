import React from 'react'
import ArrowLogo from '../logo/ArrowLogo'
import { useAppDispatch } from '@/redux/hooks/Hook';
import { change1, change2 } from '@/redux/isMenuSlice';

type TPorps={
    title:string,
    k :number,
}

export default function Elements({title,k}:TPorps) {

      const dispatch = useAppDispatch();
  
   
        const handleMenu = () => {
          if(k==0){
            dispatch(change1());
          }
          if(k!=0){
            dispatch(change2());
          }
            
        };
        
  return (

    <div onClick={handleMenu} className='flex justify-between rounded-lg  py-5 pl-10 p-4 border-white hover:bg-gray-200 hover:border-2'>
      <span>{title}</span>
      <div className='mr-2'>
      <ArrowLogo />
      </div>
    </div>
  )
}
