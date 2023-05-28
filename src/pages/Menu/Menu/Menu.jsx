/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Menu = () => {
    return (
        <div>
            {/* helmet is used to change head title dynamically */}
            {/* must need to use helmet provider in main jsx */}
           
            <Helmet>
                <title> Bistro Boss | Menu </title>
            </Helmet>
        </div>
    );
};

export default Menu;