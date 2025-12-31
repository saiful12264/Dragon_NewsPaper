import React, { Suspense } from 'react';
import Categories from '../Categories';



const Left_side = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
             <Categories></Categories>
           </Suspense>
        </div>
    );
};

export default Left_side;