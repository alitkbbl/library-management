import { useAppSelector } from '@/redux/hooks/Hook';
import Link from 'next/link'
import React from 'react'

export default function Login() {

     const xa = useAppSelector((state) => state.isMenu.userName);
  return (
    <div>
      <Link href={"/userPanel"}>

        <span className='px-2'>{xa}</span>
      </Link>
      
    </div>
  )
}
