/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import heroImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
// import drinks from '../../../assets/menu/menu-bg.png'


const Menu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const drinks = menu.filter(item => item.category === "drinks");
    const soup = menu.filter(item => item.category === "soup");
    // console.log(popular);
    console.log(offered);
    console.log(dessertImg);



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

            {/* Menu Page -> desser item */}

            <MenuCategory
                items={dessert}
                title={"Dessert"}
                img={dessertImg}>
            </MenuCategory>

            {/* Menu Page -> pizza item */}
            <MenuCategory
                items={pizza}
                title={"Pizza"}
                img={pizzaImg}>
            </MenuCategory>


            {/* Menu Page -> salad item */}
            <MenuCategory
                items={salad}
                title={"Salad"}
                img={saladImg}>
            </MenuCategory>


            {/* Menu Page -> soup item */}
            <MenuCategory
                items={soup}
                title={"Soup"}
                img={soupImg}>
            </MenuCategory>



        </div>
    );
};

export default Menu;