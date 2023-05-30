/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import heroImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === "offered")
    console.log(offered);



    return (
        <div>
            {/* helmet is used to change head title dynamically */}
            {/* must need to use helmet provider in main jsx */}
            <Helmet>
                <title>Bistro | Menu </title>
            </Helmet>

            <Cover heroImg={heroImg}
                title={"Our Menu"}>
            </Cover>

            <SectionTitle heading={"Todays Offer"} subHeading={"Dont Miss"}>
            </SectionTitle>
            {/* Menu Page -> offered item */}

            <MenuCategory items={offered}>

            </MenuCategory>


          

            



        </div>
    );
};

export default Menu;