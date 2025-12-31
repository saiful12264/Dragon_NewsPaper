import React from 'react';
import Header from '../Compoent/Header';
import Latest_news from '../Compoent/Latest_news';
import Navbar from '../Compoent/Navbar';
import Left_side from '../Compoent/homelayout/Left_side';
import Right_side from '../Compoent/homelayout/Right_side';
import { Outlet } from 'react-router';


const Home = () => {
    return (
        <div>
         <header>
            <Header></Header>
            <section>
                <Latest_news></Latest_news>
            </section>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
         </header>
         <main className='w-11/12 mx-auto *:border grid grid-cols-12'>
            <aside className='col-span-3'>
                <Left_side></Left_side>
            </aside>
            <section className="main col-span-6">
                <Outlet></Outlet>

            </section>
           <aside className='col-span-3'>
             <Right_side></Right_side>
           </aside>
         </main>
        </div>
    );
};

export default Home;