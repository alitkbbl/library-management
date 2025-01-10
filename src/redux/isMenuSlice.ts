'use client';
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { JSX } from 'react';


 export type res ={
reserveBook : string[]  ;
map(arg0: (item: string) => JSX.Element): import("react").ReactNode;
}
export interface IisMenuSlice{
  
  value: boolean
  m1:boolean
  userLogin : boolean
  adminLogin : boolean
  userId : string | null
  userName :string
  reserveBook : res | null;
  wMajor:string | null;
  
}

const initialState: IisMenuSlice = {
  value: false,
  m1:false,
  userLogin:false,
  adminLogin:false,
  userId : null,
  userName : "ورود / ثبت نام ",
  reserveBook: null,
  wMajor:null

}

export const isMenuSlice = createSlice({
  name: 'isMenu',

  initialState,
  reducers: {
    toggleMenu: (state) => 
        { state.value = !state.value; },
    change1: (state) => 
      { state.m1 = !state.m1; },
    change2: (state) => 
      { state.m1 = false; },
    userLogin: (state,actions) => 
      { state.userLogin = actions.payload; },
    isAdmin: (state,actions) => 
      { state.adminLogin = actions.payload; },
    adminLogin: (state ,actions) => 
      {  state.userId = actions.payload;},
    setName: (state ,actions) => 
      {  state.userName = actions.payload;},
    setReserveBook : (state ,actions) => 
      {  state.reserveBook = actions.payload},
    setMajor : (state ,actions) => 
      {  state.wMajor = actions.payload}
   
  }
});

export const { toggleMenu,change1,change2 ,adminLogin , userLogin,setName ,setReserveBook,isAdmin,setMajor} = isMenuSlice.actions

export const selectCount = (state: RootState) => state.isMenu.value

export default isMenuSlice.reducer