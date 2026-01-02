import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/categories.json").then((res)=>res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Categories({categories.length})</h2>
            <div className='grid grid-cols-1 gap-3 mt-5 font-normal'>
                {
                    categories.map((category) => <NavLink 
                    key={category.id}
                    className='btn bg-base-100 border-0 hover:bg-base-200 '
                    to={`/category_news/${category.id}`}
                    >
                        <span className='text-base-400 font-normal'>
                            {category.name}
                        </span>
                        
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;