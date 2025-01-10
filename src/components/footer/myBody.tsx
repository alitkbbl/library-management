
'use client'

import BookForm from '@/components/footer/requestget';
import BookCard from '@/components/Generic/BookCard';
import { Tbook } from '@/components/Generic/BookCardBox';
import { useAppSelector } from '@/redux/hooks/Hook';

import { getProduct } from '@/redux/hooks/jsonHookBook';

import Link from 'next/link';
import React, { useEffect, useState } from 'react'



export default function AAAAAAAAA() {

      const [bookss, setBookss] = useState<Tbook[]>([]);
      const majjor =useAppSelector((state)=>state.isMenu.wMajor)

    
      useEffect(() => {
        getProduct().then((result) => {
          setBookss(result);
        });
      }, []);
    
      useEffect(() => {
        const filteredBooks = bookss.filter((item) => item.major === majjor || item.major === "عمومی");
        setBookss((prevBooks) => {
            // اگر لیست فیلتر شده متفاوت است، به‌روزرسانی انجام می‌شود.
            if (JSON.stringify(prevBooks) !== JSON.stringify(filteredBooks)) {
                return filteredBooks;
            }
            return prevBooks; // در غیر این صورت، کتاب‌ها به‌روز نمی‌شوند.
        });
    }, [majjor, bookss]);
    
      
     
    
    return (

    <div>
        <div className='flex '>
            <div className='flex-grow'>
                <BookForm />
            </div>
             <div className='mt-5'>
                <Link href={'/'} className='bg-red-500 px-5 py-3 ml-5 mt-5 rounded-s-full'>Home</Link>  
                </div>     
        
        </div>

    <div className='my-2 mx-10 bg-slate-100'>        
    <div className="flex flex-col flex-grow rounded-lg mx-2">
          {bookss.map((item: Tbook) =>
             (
                 <BookCard
                 key={item.id}
                 id={item.id}
                 englandTitle={item.englandTitle}
                 title={item.title}
                 entesharat={item.entesharat}
                 author={item.author}
                 number={item.number}
                 url={item.url}
                major={item.major}
                />
            )
        )}
        </div>

    </div>
</div>

  )
}
