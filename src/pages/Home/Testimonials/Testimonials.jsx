/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(3);

    useEffect(() => {
        fetch('../../../../public/data/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle
                heading={"What Our CLient Say"}
                subHeading={"Check Out Now"}>
            </SectionTitle>
            <div>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='flex flex-col items-center ml-24 my-16'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    onChange={setRating}
                                />
                                <p>Rating: {review.details}</p>
                                <h3 className="text-2xl text-orange-500">
                                    {review.name}
                                </h3>
                            </div>
                        </SwiperSlide>)
                    }
                    {/* <SwiperSlide>Slide 1</SwiperSlide> */}

                </Swiper>

            </div>

        </div>
    );
};

export default Testimonials;