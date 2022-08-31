import React from 'react';

const Review = ({ product }) => {
    const { name, price, img } = product
    return (
        <div>
            
            <div class="card card-side bg-base-100 shadow-md mb-5   sm:mx-5">
                <figure className='mx-12'><img style={{ width: '12em' }} src={img} alt="Album" /></figure>
                <div class="card-body ">
                    <h2 className=" text-left font-bold lg:text-lg md:text-md sm:text-sm">{name}</h2>
                    <p className='text-left text-accent font-medium mb-3'>Price : ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;