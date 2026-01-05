import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Compoent/Navbar';

const Auth = () => {
    return (
      <div className='bg-base-200 min-h-screen'>
          <div className='container mx-auto '>
         <header className='py-5'>
         <Navbar></Navbar>
         </header>
         <main>
          <Outlet></Outlet>
         </main>
        </div>
      </div>
    );
};

export default Auth;