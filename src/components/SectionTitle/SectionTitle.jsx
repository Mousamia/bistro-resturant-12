/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
  
    return (
        <div className='md:w-4/12 mx-auto text-center '>
            <h1 className="text-yellow-400 text-xl ">--{subHeading}-- </h1>
            <h1 className="text-slate-700 text-4xl py-3 font-bold uppercase border-y-4 text-center"> {heading} </h1>
            
        </div>
    );
};

export default SectionTitle;