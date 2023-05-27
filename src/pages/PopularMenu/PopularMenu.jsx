/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuItem from '../../components/MenuItem/MenuItem';
import ShowAll from '../showAll/ShowAll';

const PopularMenu = () => {
    const [menu, setmenu] = useState([]);


    useEffect(() => {
        fetch('/public/data/menu.json')
            .then(res => res.json())
            .then(data => {
                const allItem = data;
                const popularItem = data.filter(data => data.category === "popular")
                setmenu(popularItem);
                // console.log(popularItem);
            })
    }, []);

    const showAll = () => {
       console.log("show all");
       
    }
    return (
        <section>
            <SectionTitle
                heading={"From our menu"}
                subHeading={"check it out"}>
            </SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 space-y-4 mt-4 mb-4'>
                {
                    menu.map(item =>
                        <MenuItem key={item._id}
                            item={item}>
                        </MenuItem>)
                }
            </div>

            <button onClick={() => showAll()} className='px-5 py-3 flex justify-center mb-3 bg-yellow-400 mx-auto rounded-md'> View Full Menu</button>


        </section>
    );
};

export default PopularMenu;