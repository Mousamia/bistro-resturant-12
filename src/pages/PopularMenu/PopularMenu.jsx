/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const PopularMenu = () => {
    const [menu, setmenu] = useState([]);

    useEffect(() => {
        fetch('/public/data/menu.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
    return (
        <section>
            <SectionTitle
                heading={"From our menu"}
                subHeading={"check it out"}>
            </SectionTitle>


        </section>
    );
};

export default PopularMenu;