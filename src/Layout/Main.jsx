/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login');
    return (
        <div>
            {/* if login location is true navbar and footer will not be shown */}
            {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;