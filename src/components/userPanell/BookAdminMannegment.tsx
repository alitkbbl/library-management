import Image from 'next/image'
import x from './../../../data/image/1.jpg'
import { JSX, useEffect, useState } from 'react';

import { TUser } from './UserInformation';
import { getProductUser } from '@/redux/hooks/jsonHookUser';
import CheckIcom from './icons/CheckIcom';
import LeftMenu from './LeftMenu';
type zz= {
   itemm:string[];
   map(arg0: (item: string) => JSX.Element): import("react").ReactNode; 
   forEach(arg0: (item: string) => void): unknown;
}
type Tbook = {
    id: string;
    title: string;
    entesharat: string;
    author: string;
    major :string
    number: number;
    englandTitle: string;
    whoGet?: zz

  }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function BookAdminManengment({ id, title, author, number ,major, entesharat ,englandTitle,whoGet }: Tbook) {
    
    const [status ,setStatus] = useState<boolean>(false)

 
    

    
    
    const handleClick=()=> {
        setStatus(!status);
        if(status==true){
            setB("...more")
        }else{
            
            setB("...less")
        }
    
    }
 
  
     type Tuserss ={
           items : TUser[] | null;
           map(arg0: (item: TUser) => JSX.Element | any): import("react").ReactNode;
           filter(arg0: (item: TUser) => boolean): TUser
        } 
       
       
        const [user, setUser] = useState<Tuserss>();
           
             useEffect(() => {
               getProductUser().then((result) => {
                 setUser(result);
               });
             }, []);
console.log(user);
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//    useEffect(() => {
//     whoGet?.forEach((itemm: string | undefined) => {
//       setUser((prevUser) => prevUser?.filter((item) => itemm === item.id));
//     });
//   }, [whoGet]);
  

const [B,setB]=useState<string>("...more");

  return (
      <div>

      <div className=' text-gray-800 my-2 mx-3 bg-white flex  flex-grow rounded-xl'>
        <div className='flex flex-grow'>
 
        <div className='ml-10 my-2 mr-1'>
           <Image src={x} alt="Banner"  width={180} height={220} className="rounded-lg "/>
        </div>
        <div className='flex flex-col mr-2 justify-center'>
          <div className='  mt-6 '>
              <h2 className='text-5xl font-bold'>{title}</h2>
              <h2 className='text-xs  mx-1'>{englandTitle}</h2>
          </div>
          <div className='mt-16  text-slate-700 text-lg'>
            <p>نویسنده :{author}</p>
            <p> انتشارات :{entesharat}</p>
            <div className='flex'>
               

               <div className='pb-1 pr-1 mt-2 mr-1 mb-1 text-slate-800 cursor-pointer hover:scale-110' onClick={handleClick}>
                    <p className='py-1.5 px-3.5 bg-red-500 rounded-3xl'> {B}</p>
                </div> 
                {
                    status && 
                    
                    <div className='m-1 text-lg'>
                        <br />
                        <h2>کد کتاب : {id}</h2>
                        <h2 className='mb-1'>رشته ی کتاب: {major} </h2>
                        <div className=' justify-center'>
                        {user?.map((item: TUser  ) =>
                             { const elements: JSX.Element | JSX.Element[] = [];
                              whoGet?.forEach((z: string) => { if (z == item.id)
                               { elements.push(
                                 <div className='flex m-3 justify-center bg-slate-300  py-1.5 pr-2 pl-5 rounded-md ' key={item.id}>
                                    
                                    <CheckIcom />
                                    <p key={item.id} className='mr-2 ml-3'>{item.name}</p>
                                    <p className='mr-28 ml-1 bg-red-300 py-0.5 px-2 rounded-md'>{item.userName}</p>
                                    <p className='ml-28'>   :userName </p>
                                    <p className='ml-1 bg-red-300 py-0.5 px-2 rounded-md'>{item.password}</p>
                                    <p className='ml-16 '>  :pass</p>
                                    <p className='ml-1 mr-14 bg-red-300 py-0.5 px-2 rounded-md'>{item.id}</p>
                                    <p className='ml-5 '>  :ID</p>
                                </div>); } }); return elements; })}
                        </div>
                    </div>
                }
            </div>
            


          </div>
        </div>
                

        </div>

        <div className=''>
            <LeftMenu 
            number={number}
            id={id}/>
         
        </div>

      </div>
    </div>
  );
}
