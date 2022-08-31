import React from 'react';
import { FcInTransit } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import './Bottom.css';

const BottomText = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 wrapper mb-16'>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <FcInTransit style={{ fontSize: '4.5em', backgroundColor: "#000", padding: '10px', color: '#fff', borderRadius: '50px' }}></FcInTransit>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-secondary">Worldwide Delivery</h2>
                        <p>We offer competitive prices on our 100 million plus product any range.</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <FcPaid style={{ fontSize: '4.5em', backgroundColor: "#000", padding: '10px', color: '#fff', borderRadius: '50px' }}></FcPaid>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-secondary">Safe Payment</h2>
                        <p>We offer competitive prices on our 100 million plus product any range.</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <FcShop style={{ fontSize: '4.5em', backgroundColor: "#000", padding: '10px', color: '#fff', borderRadius: '50px' }}></FcShop>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-secondary">Shop With Confidence</h2>
                        <p>We offer competitive prices on our 100 million plus product any range.</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <FcOnlineSupport style={{ fontSize: '4.5em', backgroundColor: "#000", padding: '10px', color: '#fff', borderRadius: '50px' }}></FcOnlineSupport>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-secondary">24/7 Support</h2>
                        <p>We offer competitive prices on our 100 million plus product any range.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomText;