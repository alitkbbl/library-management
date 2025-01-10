import Image from 'next/image'
import x from './../../../data/image/1.jpg'

 type Tbook = {
  id: string;
  title: string;
  entesharat: string;
  author: string;
  number: number;
  englandTitle: string;
  url: string;
  whoget?: string[]
  major?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function BookCard({ id, title, author, number, url , entesharat ,englandTitle,major,whoget}: Tbook) {
  return (
    <div>
      <div className=' text-gray-800 my-1 bg-white flex  flex-grow rounded-xl'>
        <div className='ml-10 my-1 mr-1'>
           <Image src={x} alt="Banner"  width={180} height={220} className="rounded-lg "/>
        </div>
        <div className='flex flex-col mr-2 justify-center'>
          <div className='  mt-6 '>
              <h2 className='text-4xl font-bold'>{title}</h2>
              <h2 className='text-xs  mx-1'>{englandTitle}</h2>
          </div>
          <div className='mt-16  text-slate-700'>
            <p>نویسنده :{author}</p>
            <p> انتشارات :{entesharat}</p>
            <p> کد کتاب :{id}</p>
          </div>
        </div>
        <div>
                

        </div>
      </div>
    </div>
  );
}
