/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import MenuItem from '../../../components/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link, useParams } from 'react-router-dom';

const MenuCategory = ({ items, img, title }) => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];

    const {category} = useParams();

    // console.log(category);
    const initialIndex = categories.indexOf(category);
    // console.log(initialIndex);



    return (
        <div className='pt-8 '>
            {title && <Cover img={img}
                title={title}>
            </Cover>}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 space-y-4 mt-4 mb-4'>
                {
                    items.map(item =>
                        <MenuItem key={item._id}
                            item={item}>
                        </MenuItem>)
                }
            </div>
            {/* dynamic order */}
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline bg-black text-white border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;