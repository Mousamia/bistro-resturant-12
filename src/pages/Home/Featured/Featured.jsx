/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './featured-img.css'


const Featured = () => {
    return (
        <div className='featured-img bg-fixed'>
            <SectionTitle heading={"From Our Menu"}
                subHeading={"check out now"}>
            </SectionTitle>
            <div className='flex md:justify-center items-center py-8 px-16 bg-slate-700 text-white opacity-60'>
                <div>
                    <img src={featuredImg}  alt="" />
                </div>
                <div className='md:ml-12'>
                    <p>May 28, 2023</p>
                    <h1 className="text-2xl font-bold">Where can I get it?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore labore libero porro ratione, impedit exercitationem voluptates debitis repellat? Quidem atque non harum facilis inventore molestiae aliquid praesentium asperiores minima veritatis. Cumque beatae recusandae quidem saepe ea? Cupiditate molestiae eius mollitia quisquam eum consequuntur laudantium est debitis! Numquam modi adipisci temporibus!</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Read More</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;