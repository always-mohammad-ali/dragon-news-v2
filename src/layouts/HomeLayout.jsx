import React from 'react';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../components/HomeLayout/RightAside';


const HomeLayout = () => {
    return (
        <div>
              <header>
                {/* HEADER PART */}
                  <Header></Header>
                
                {/* LATEST NEWS PART */}
                <LatestNews></LatestNews>

                {/* NAVBAR SECTION */}
                <Navbar></Navbar>



               </header>
          <main className='w-11/12 mx-auto grid grid-cols-12 border-blue-400 border-2 my-10'>
                <aside className='leftAside col-span-3 border-2 border-amber-300'>
                    <LeftAside></LeftAside>
                </aside>

                <section className='col-span-6 border-2 border-red-200 '>
                     <Outlet></Outlet>
                </section>

                <aside className='col-span-3 border-2 border-amber-500'>
                     <RightAside></RightAside>
                </aside>
          </main>

        </div>
    );
};

export default HomeLayout;