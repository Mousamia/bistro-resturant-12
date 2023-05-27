/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='flex gap-2 font-serif mr-2 space-x-3 items-center'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[120px]' src={image} alt="" />
            <div>
                <h3 className='text-2xl font-bold text-[#151515]'>{name}------ </h3>
                <p>{recipe}</p>
            </div>
            <p className='text-xl text-[#BB8506]'>{price}</p>

        </div>
    );
};

export default MenuItem;