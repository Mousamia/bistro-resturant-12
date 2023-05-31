/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import MenuItem from '../../../components/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({ items, img, title }) => {
    console.log(items);
    return (
        <div className='pt-8 '>
            {title && <Cover img={img}
                title= {title}>
            </Cover>}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 space-y-4 mt-4 mb-4'>
                {
                    items.map(item =>
                        <MenuItem key={item._id}
                            item={item}>
                        </MenuItem>)
                }
            </div>

        </div>
    );
};

export default MenuCategory;