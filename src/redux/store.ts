'use client';
import { configureStore } from '@reduxjs/toolkit';
import isMenuReducer from './isMenuSlice'; // استفاده از پیش‌فرض اکسپورت ریدوسر
import { thunk } from 'redux-thunk';


const store = configureStore({
  reducer: {
    isMenu: isMenuReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// سپس تایپ‌های RootState و AppDispatch و AppStore را تعریف می‌کنیم
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
