import React from 'react';
import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
        <div className=''>
            <div className='w-11/12 justify-center mx-auto bg-blue-100 flex flex-row gap-5 my-5 p-2'>
                <p className='bg-accent px-3 py-2'>Latest</p>

            
            <Marquee pauseOnHover={true} speed={150}>

                  <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>

                  <p className='mr-10'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>

                  <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;