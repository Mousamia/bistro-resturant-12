/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../../PopularMenu/PopularMenu';


const Home = () => {
    return (
        <div>
        <Banner/>
        <Category/>
        <PopularMenu/>
        </div>
    );
};

export default Home;