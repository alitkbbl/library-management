import { useState, useEffect } from 'react';
import { getProduct } from '@/redux/hooks/jsonHookBook';

import BookAdminManengment from './BookAdminMannegment';
import DownIcon from './icons/DownIcon';

import Link from 'next/link';


type Tbook = {
  id: string;
  title: string;
  entesharat: string;
  author: string;
  number: number;
  englandTitle: string;
  major:string;
  whoGet?: string[] 

}

export default function AdminBookBox() {

  const [bookss, setBookss] = useState<Tbook[]>([]);

  useEffect(() => {
    getProduct().then((result) => {
      setBookss(result);
    });
  }, []);

  const [status,setStatus]=useState<boolean>(false);
  const handleClick=()=>{
    setStatus(!status)
  }
  return (
    <div className="flex flex-col flex-grow rounded-xl mx-6 mt-5 mb-10 bg-slate-200">
      <div className='my-3 font-bold text-3xl mr-9 text-gray-800 flex justify-between '>
        <div className='flex'>
           <div onClick={handleClick} className='ml-3 p-4 bg-white rounded-full cursor-pointer'>
              <DownIcon />
            </div>
        
            <h2 className='mt-3 mr-3'>لیست همه ی کتاب ها</h2>
        </div>
       <div className='ml-5'>
        <Link href={'/addBook'}>
        <p className='bg-red-500 py-2.5 px-6 rounded-full mt-1'>Add</p>
        </Link>
        
       </div>
        
      </div>
        {
          status && 
      <div className='mx-2 mb-1'>

         {bookss.map((item: Tbook) =>
          <BookAdminManengment
            key={item.id}
            id={item.id}
            englandTitle={item.englandTitle}
            title={item.title}
            entesharat={item.entesharat}
            author={item.author}
            number={item.number}
            major={item.major}
            whoGet={item?.whoGet}
          />
        )
      }
      </div>
      }
     
    </div>
  );
}
