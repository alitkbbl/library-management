import { useAppDispatch} from '@/redux/hooks/Hook';
import {  adminLogin, isAdmin, setMajor, userLogin } from '@/redux/isMenuSlice';
import React, { JSX, useEffect, useState } from 'react'
import { TUser } from './UserInformation';
import { getProductUser } from '@/redux/hooks/jsonHookUser';


export default function Logining() {

    const dispatch = useAppDispatch();
  let myid : string | null="0";
  let isadmin : boolean | null =false
  let a :number=0;
  let majorr:string;
    const handleBottom = (event: { preventDefault: () => void; }) => {
     event.preventDefault()
      if(a==1){
        
        
        dispatch(userLogin(true));
        dispatch(adminLogin(myid));
        dispatch(isAdmin(isadmin));
        if(isadmin!=true){
          dispatch(setMajor(majorr))
        }
      }
      if(a!=1){
        alert("نام کاربری یا رمز شما وجود ندارد.(ثبت نام کنید)")
      }
       
    };


    
    const [inputValue, setInputValue] = useState('');
    const handleLogin = (event: { target: { value: React.SetStateAction<string>; }; }) =>
       { setInputValue(event.target.value); };

    
    const [inputValue2, setInputValue2] = useState('');
    const handleLogin2 = (event: { target: { value: React.SetStateAction<string>; }; }) =>
       { setInputValue2(event.target.value); };



    type Tuserss ={
       items : TUser[] | null;
       map(arg0: (item: TUser) => JSX.Element): import("react").ReactNode;
       filter(arg0: (item: TUser) => boolean): TUser
    } 
   
   
    const [user, setUser] = useState<Tuserss>();
       
         useEffect(() => {
           getProductUser().then((result) => {
             setUser(result);
           });
         }, []);
       
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const myuser:TUser | undefined =user?.filter((item) => item.userName == inputValue && item.password == inputValue2)
 

  useEffect(() => { if (user) { const filteredUsers: TUser[] = user.filter( (item) =>
     item.userName === inputValue && item.password === inputValue2 );
      const myuser: TUser | undefined = filteredUsers[0];
       // eslint-disable-next-line react-hooks/exhaustive-deps
       if (myuser) { a=1 ;myid=myuser.id ; isadmin=myuser.isAdmin;majorr=myuser.major}} }, [user, inputValue, inputValue2, a]);

    
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">سلام!</h2>
        <p className="text-center mb-6 text-gray-800">جهت ورود نام کاربری و رمز خور را وارد کنید</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
             نام کاربری
            </label>
            <input
              id="mobile"
              type="text"
              onChange={handleLogin}
              value={inputValue}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:scale-105 focus:bg-slate-100"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              رمز عبور
            </label>
            <input
              id="email"
              type="text"
              onChange={handleLogin2}
              value={inputValue2}  
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:scale-105 focus:bg-slate-100"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={handleBottom}
              className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}




