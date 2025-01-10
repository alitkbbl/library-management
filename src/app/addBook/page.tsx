'use client'
import Navbar from '@/components/header/Navbar';
import store from '@/redux/store';
import React, { useState } from 'react';
import { Provider } from 'react-redux';

interface FormData {
  id : string
  title: string;
  entesharat: string;
  author: string;
  number: number;
  titleInEnglish: string;
  major: string;
  whoGet : string[];
}

function getRandomIntAsString(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}




const BookFormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    id:getRandomIntAsString(5,100000),
    title: '',
    entesharat : '',
    author: '',
    number: 0,
    titleInEnglish: '',
    major: '',
    whoGet:[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    fetch('http://localhost:8001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then( ()=> {

      window.location.reload()
      
    }).then()
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  

  return (
   <Provider store={store}  >

    <div className='bg-slate-100'>
      <Navbar />
    <div className="max-w-md mx-auto mb-10 mt-20 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl mt-5 font-bold mb-4">فرم ثبت کتاب</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            عنوان
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="entesharat">
            انتشارات
          </label>
          <input
            type="text"
            id="entesharat"
            name="entesharat"
            value={formData.entesharat}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
            نویسنده
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
            تعداد کتاب اضافه شده
          </label>
          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titleInEnglish">
            عنوان به لاتین
          </label>
          <input
            type="text"
            id="titleInEnglish"
            name="titleInEnglish"
            value={formData.titleInEnglish}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
            رشته‌ی کتاب
          </label>
          <input
            type="text"
            id="major"
            name="major"
            value={formData.major}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
            ثبت‌نام
          </button>
        </div>
      </form>
    </div>
  </div>
</Provider>
  );
};

export default BookFormComponent;
