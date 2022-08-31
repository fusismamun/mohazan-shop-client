import React from 'react';

const Cart = ({cart}) => {

    console.log(cart);

    let total = 0;
    let shipping = 0;
    
    for(const product of cart) {
        total = total + product.price;
         shipping = shipping + product.shipping;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandtotal = parseFloat((total + shipping + tax).toFixed(2)) ;
    return (
        <div className="text-left p-5">
        <h2 className="text-center mt-12 mb-5 text-2xl font-bold text-accent">Order Summary</h2>
        <p className='text-md font-bold'>Selected Items: {cart.length}</p>
        <p className='my-2 text-md font-bold' >Total Price: $ {parseFloat(total.toFixed(2))}</p>
        <p className='font-bold'>Total Shipping Charge: ${parseFloat(shipping.toFixed(2))}</p>
        <p className='my-2 text-md '>Tax: <span className='font-bold'>${tax}</span></p>
        <h3 className='mb-10 text-md font-bold'>Grand Total: ${grandtotal}</h3>
        <div className="card-actions justify-center">
            <button className="btn btn-secondary text-white">Proceed Checkout</button>
        </div>
    </div>
    );
};

export default Cart;