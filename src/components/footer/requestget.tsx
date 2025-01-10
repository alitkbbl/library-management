import React, { useState } from 'react';


const BookForm = () => {

    function getRandomIntAsString(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
      }


  const [formData, setFormData] = useState({
    id:getRandomIntAsString(1,100000),
    stID: "1",
    stName:'',
    bookName:'',
    bookID: '',
    status: false,
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetch('http://localhost:8001/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-md my-5 bg-stone-300">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">نام کاربر:</label>
        <input
          type="text"
          name="stName"
          value={formData.stName}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">نام کتاب:</label>
        <input
          type="text"
          name="bookName"
          value={formData.bookName}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">کد کتاب:</label>
        <input
          type="text"
          name="bookID"
          value={formData.bookID}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        ارسال
      </button>
    </form>
  );
};

export default BookForm;
