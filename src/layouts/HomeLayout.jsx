import React from 'react';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';


const HomeLayout = () => {
    return (
        <div>
              <header>
                {/* HEADER PART */}
                  <Header></Header>
                
                {/* LATEST NEWS PART */}
                <LatestNews></LatestNews>



               </header>
          <main>
                <aside className='leftAside'>

                </aside>

                <section className='main'>

                </section>

                <aside className='rightAside'>

                </aside>
          </main>

        </div>
    );
};

export default HomeLayout;