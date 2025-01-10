'use client';
import { useAppSelector } from "@/redux/hooks/Hook";
import LoginShop from "./loginShop/LoginShop";
import Logo from "./Logo";
import Menu from "./menu/Menu";
import FristListElement from "./menu/menuBar/FristListElement";


export default function Navbar() {

  const isMyMenu = useAppSelector((state) => state.isMenu.value);

  return (
    <div className="fixed top-0 w-full z-50">

<div className="relative ">
  <nav className="flex justify-center bg-gray-200 p-5 sticky top-0 ">
    <div className="flex-grow basis-1/8"></div>
    <div className="flex justify-between flex-grow basis-8/12">

      <div >
        <Menu />
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <LoginShop />
      </div>
    </div>
    <div className="flex-grow basis-1/8"></div>
  </nav>
  
  <div  className='text-gray-700 m-1 absolute top-auto rounded-lg z-50 bg-white flex bg-opacity-70 backdrop-blur-sm'>
      <div className=''>
      {isMyMenu && <FristListElement />}
      </div>
  </div> 
</div>
</div>
  )
}
