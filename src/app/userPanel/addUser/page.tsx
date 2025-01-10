'use client'
import Navbar from '@/components/header/Navbar';
import store from '@/redux/store';
import React, { useState } from 'react';
import { Provider } from 'react-redux';

interface FormData {
  name: string;
  userName: string;
  password: string;
  id: string;
  role:string;
  isAdmin :boolean;
  major?: string;
  reserveUserBook :string[]
}

function getRandomIntAsString(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}


const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    userName: '',
    password: '',
    id:getRandomIntAsString(1,10000),
    role:'',
    reserveUserBook:[],
    isAdmin:false,
    major: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if(formData.role=='admin'){
      formData.isAdmin=true;
    }
    e.preventDefault();
    
    fetch('http://localhost:8001/user', {
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
    <Provider store={store} >

    <div className='bg-slate-100 pt-24 pb-4'>
      <Navbar />
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">ثبت نام کاربر</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="name">
            نام
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
            نام کاربری
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100"
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            رمز عبور
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100"
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            نقش
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100"
            >
            <option value="">انتخاب نقش</option>
            <option value="admin">ادمین</option>
            <option value="user">کاربر</option>
          </select>
        </div>
        {formData.role === 'user' && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
              رشته تحصیلی
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
        )}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
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

export default FormComponent;
