'use client';

import React from 'react';
import LogoTrue from "./logo/LogoTrue";
import LogoFalse from "./logo/LogoFalse";
import { useAppSelector, useAppDispatch } from './../../../redux/hooks/Hook';
import { toggleMenu } from '@/redux/isMenuSlice';



export default function Menu() {
    const isMyMenu = useAppSelector((state) => state.isMenu.value);
    const dispatch = useAppDispatch();

    // تابعی برای مدیریت تغییر حالت
    const handleMenuToggle = () => {
        dispatch(toggleMenu());
    };

    return (
        <div onClick={handleMenuToggle} className='rounded-full bg-white p-2 hover:scale-110 transition duration-300 ease-in-out'>
            { isMyMenu ? <LogoTrue /> : <LogoFalse /> }
            
        </div>
    );
}
