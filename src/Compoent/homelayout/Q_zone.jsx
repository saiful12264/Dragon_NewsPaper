import React from 'react';
import swimmingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playgroundImg from '../../assets/playground.png'

const Q_zone = () => {
    return (
       <div className='bg-base-200 p-5'>
         <h2 className='font-bold mb-3'>Q-Zone</h2>
         <div className='space-y-8'>
            <img src={swimmingImg} alt="" />
            <img src={classImg} alt="" />
            <img src={playgroundImg} alt="" />
        </div>
       </div>
    );
};

export default Q_zone;