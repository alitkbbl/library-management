import React, { useEffect } from 'react'
import { TUser } from './UserInformation'
import Image from 'next/image'
import face from './../../../data/image/face.jpg'
import { useAppDispatch } from '@/redux/hooks/Hook'
import { setName, setReserveBook } from '@/redux/isMenuSlice'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function BoxInfirmation({name,userName,isAdmin,id,password,reserveUserBook}:TUser) {
    let a;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isAdmin ? a="Admin" : a="User"

    

    const dispatch = useAppDispatch();

    const ha = () => {
        dispatch(setName(name));
        dispatch(setReserveBook(reserveUserBook));
    };


    useEffect(()=> {
        ha(); 
    })
   

  return (
    
<div className="flex justify-between mx-5 mb-5">
    <br />
    <br />
    {isAdmin ?  
       <div className="flex  mx-6 my-4 pl-5 bg-white rounded-lg">
        <div className="m-5 text-gray-900 font-bold ml-5">

            <div>
                <Link href={'/seeRequest'}> 
                    <div>
                        <h2 className='bg-slate-400 font-semibold text-xl py-3 mb-10 mt-2 m-2 pr-10 pl-12 rounded-xl shadow-md'>مشاهده درخواست ها</h2>
                    </div>
                </Link>   
            </div>

            <div>

                <div >
                <Link  href={'/userPanel/addUser'}>
                    <div>
                        <h2 className='bg-slate-300  text-lg py-3 mb-3 m-2 pr-4 pl-4 rounded-xl flex-auto shadow-md'>اضافه کردن کاربر</h2>
                    </div>
                </Link>   
                </div>
                <div>
                <Link  href={'/addBook'}>
                    <div>
                        <h2 className='bg-slate-300  text-lg py-3  m-2 pr-4 pl-4 rounded-xl flex-auto shadow-md'>اضافه کردن کتاب</h2>
                    </div>
                </Link>   
                </div>
            </div>
             
        </div>
        <div>
            
        </div>
    </div> : null }
    

    <div className="flex justify-between flex-grow m-4 bg-white rounded-lg">
        <div className="m-5 text-gray-800 font-bold">
            <h2 className="text-3xl mt-1 mb-8">کاربر  :{name}</h2>
            <h2>نام کاربری در سامانه :{userName}</h2>
            <div className="flex">
                <h2 className="mt-3">وضعیت  :  </h2>
                <h2 className="mt-1 mr-2 py-2 px-3 bg-red-500 rounded-3xl">{a}</h2>
            </div>

        </div>
        <div>
            <Image  src={face} alt="Banner"  width={250} height={235} className="rounded-b-3xl rounded-t-md mx-3 mt-2 mb-6 shadow-2xl hover:scale-y-150"/>
        </div>
    </div>

</div>
  )
}


