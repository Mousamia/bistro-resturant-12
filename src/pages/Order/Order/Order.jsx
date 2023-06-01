/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover'
import orderImg from '../../../assets/shop/orderImg.jpg'
import FoodCard from '../../../components/FoodCard/FoodCard'
import useMenu from '../../../hooks/useMenu'
import { Helmet, HelmetProvider } from 'react-helmet-async';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Order = () => {
    const [menu] = useMenu();
    console.log(menu);

    const [tabIndex, setTabIndex] = useState(0);


    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const drinks = menu.filter(item => item.category === "drinks");
    const soup = menu.filter(item => item.category === "soup");
    return (
        <div>
            {/* helmet here */}
            <Helmet>
                <title>Bistro | Order </title>
            </Helmet>
            <Cover img={orderImg}></Cover>
            {/* REACT TAB */}
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {
                            salad.map(item => <FoodCard
                                key={item._id}
                                item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {
                            pizza.map(item => <FoodCard
                                key={item._id}
                                item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {
                            soup.map(item => <FoodCard
                                key={item._id}
                                item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {
                            dessert.map(item => <FoodCard
                                key={item._id}
                                item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {
                            drinks.map(item => <FoodCard
                                key={item._id}
                                item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default Order;