import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center  gap-5 '>
              <img src={logo} alt="" />
              <p className='text-[18px]  text-base-400'>Journalism Without Fear or Favour</p>
              
              <p className='font-semibold  text-base-400'>{format(new Date(),"EEEE, MMMM MM , yyyy")}</p>

        </div>
    );
};

export default Header;