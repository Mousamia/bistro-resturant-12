/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;