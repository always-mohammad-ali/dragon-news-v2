import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('../../../public/categories.json').then(res => res.json());


const Categories = () => {

    const categories = use(categoryPromise);

    return (
        <div>
            <h3>All Categories {categories.length}</h3>
            <div className='grid grid-cols-1 '>
                {
                    categories.map((category) => (
                        <NavLink 

                        key={category.id}
                        
                        className={({isActive}) => isActive ? "bg-accent px-3 py-2" : "hover:bg-gray-200 px-3 py-2"}
                        
                        to={`/category/${category.id}`}>

                            {category.name}

                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;