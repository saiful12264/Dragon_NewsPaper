import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest_news = () => {
    return (
        <div className='w-11/12 mx-auto my-3 flex items-center gap-5 bg-accent p-3'>
            <p className='text-base-100    bg-secondary p-2'>Latest</p>
          <Marquee className='gap-5' pauseOnHover speed={60}>
             
           <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ab.</p>
           <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ab.</p>
           <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ab.</p>
          </Marquee>
        </div>
    );
};

export default Latest_news;