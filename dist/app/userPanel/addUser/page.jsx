"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_1 = __importDefault(require("@/components/header/Navbar"));
const store_1 = __importDefault(require("@/redux/store"));
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
function getRandomIntAsString(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}

const FormComponent = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        name: '',
        userName: '',
        password: '',
        id: getRandomIntAsString(1, 10000),
        role: '',
        reserveUserBook: [],
        isAdmin: false,
        major: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(Object.assign(Object.assign({}, formData), { [name]: value }));
    };
    const handleSubmit = (e) => {
        if (formData.role == 'admin') {
            formData.isAdmin = true;
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
            .then(() => {
            window.location.reload();
        }).then()
            .catch((error) => {
            console.error('Error:', error);
        });
    };
    return (<react_redux_1.Provider store={store_1.default}>

    <div className='bg-slate-100 pt-24 pb-4'>
      <Navbar_1.default />
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">ثبت نام کاربر</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="name">
            نام
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
            نام کاربری
          </label>
          <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            رمز عبور
          </label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            نقش
          </label>
          <select id="role" name="role" value={formData.role} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-100">
            <option value="">انتخاب نقش</option>
            <option value="admin">ادمین</option>
            <option value="user">کاربر</option>
          </select>
        </div>
        {formData.role === 'user' && (<div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
              رشته تحصیلی
            </label>
            <input type="text" id="major" name="major" value={formData.major} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>)}
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
            ثبت‌نام
          </button>
        </div>
      </form>
    </div>
   </div>
  </react_redux_1.Provider>);
};
exports.default = FormComponent;
