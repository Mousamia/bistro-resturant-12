/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import heroImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../PopularMenu/PopularMenu';


const Menu = () => {
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
           
        </div>
    );
};

export default Menu;