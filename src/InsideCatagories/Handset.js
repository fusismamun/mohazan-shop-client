import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";


const Handset = ({ handset,handelAddToCard }) => {
    const { img, stock, name, price } = handset;
    return (
        
        <div>
            <div class="card card-side bg-base-100 shadow-md mb-5   sm:mx-5">
        <figure className='mx-12'><img style={{width:'12em'}} src={img} alt="Album" /></figure>
            <div class="card-body ">
                <h2  className=" text-left font-bold lg:text-lg md:text-md sm:text-sm">{name}</h2>
                <p className='font-medium my-2 text-gray-400 font- text-left'>In Stock : {stock}</p>
                <p className='text-left text-accent font-medium mb-3'>Price : ${price}</p>
                <div class="card-actions justify-left">
                    <button onClick={()=> handelAddToCard(handset)} class="btn btn-secondary text-white"><AiOutlineShoppingCart style={{ fontSize:'1.5em', color: "#fff" }}></AiOutlineShoppingCart> <p className='ml-2'>Add to card</p></button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Handset;