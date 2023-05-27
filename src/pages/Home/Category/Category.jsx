/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import slide6 from '../../../assets/home/slide6.jpg'



const Category = () => {
    return (
        <div>
            <section>
                <SectionTitle
                    heading={"order online"}
                    subHeading={"from 11am to 10pm"}
                >

                </SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24 mt-12"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className="text-4xl text-center -mt-16 text-white-300">
                            SALAD
                        </h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className="text-4xl text-center -mt-16 text-white-300">
                            CRIMSON
                        </h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className="text-4xl text-center -mt-16 text-white-300">
                            PIZZA
                        </h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className="text-4xl text-center -mt-16 text-white-300">
                            SOUP
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className="text-4xl text-center -mt-16 text-white-300">
                            DESSERT
                        </h3>
                    </SwiperSlide>

                </Swiper>
            </section>
        </div>
    );
};

export default Category;