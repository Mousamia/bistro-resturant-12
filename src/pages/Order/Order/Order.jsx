/* eslint-disable no-unused-vars */
import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import orderImg from '../../../assets/shop/orderImg.jpg'
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';


const Order = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const drinks = menu.filter(item => item.category === "drinks");
    const soup = menu.filter(item => item.category === "soup");

    return (
        <div>
            <Cover
                img={orderImg}
                title={"Order Now"}>
            </Cover>

            <Tabs>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-3">
                        {
                            salad.map(item => {
                                <FoodCard item={item}></FoodCard>
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                   <div>contentooooooo</div>
                </TabPanel>
                <TabPanel>
                <div>contentooooooo</div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;