/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const FoodCard = ({item}) => {

    const {name, recipe, price, image} = item
   
    // console.log(item);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="foodpic" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p> {recipe} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">ADD</button>
                </div>
                <p className="text-xl bg-slate-800 text-white absolute right-4 top-0"> {price} </p>
            </div>
        </div>
    );
};

export default FoodCard;