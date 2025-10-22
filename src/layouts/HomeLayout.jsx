import React from 'react';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
              <header>
                <Header></Header>
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