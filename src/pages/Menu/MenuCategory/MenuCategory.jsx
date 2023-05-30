/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import MenuItem from '../../../components/MenuItem/MenuItem';

const MenuCategory = ({items}) => {
    console.log(items);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 space-y-4 mt-4 mb-4'>
                {
                    items.map(item =>
                        <MenuItem key={item._id}
                            item={item}>
                        </MenuItem>)
                }
            </div>

    );
};

export default MenuCategory;