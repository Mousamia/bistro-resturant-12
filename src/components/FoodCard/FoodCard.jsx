/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    console.log(name);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p>price</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
            <h2 className="text-9xl mt-10">order</h2>
        </div>
    );
};

export default FoodCard;