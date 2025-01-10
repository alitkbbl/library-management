'use client';
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import store from './../redux/store';
import { Provider } from 'react-redux';
import Context from "@/components/main/Main";



export default function Home() {
  
  return ( 
    
    <Provider store={store}>
      <div>
        <Navbar />
        <Context />
      <br />
      <br /><br />
        <Footer />
      </div>
    </Provider>
  );
}
