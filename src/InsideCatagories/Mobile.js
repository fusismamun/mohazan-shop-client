import React, { useEffect, useState } from 'react';
import InsideNav from '../Shared/InsideNav';
import { FcPhoneAndroid } from "react-icons/fc";
import { FaMobileAlt } from 'react-icons/fa';
import { AiOutlineCar } from 'react-icons/ai';
import { BiHappyAlt } from 'react-icons/bi';
import { MdSportsSoccer } from 'react-icons/md';
import { GrMonitor } from 'react-icons/gr';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { GrServicePlay } from 'react-icons/gr';
import Handset from './Handset';
import sideImage from '../Img/slide-4.png'
import mobile from '../Img/smartphone.png'
import { Link } from 'react-router-dom';
import Orders from '../Orders/Orders';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import { addToDb, getStoredCart } from '../utilities/fakedb';





const Mobile = () => {
    const [products, setProducts] = useProducts()
    const [mobileCart, setMobileCarts] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const key in storedCart){
            const addedProduct = products.find(product => product.key === key);
            if(addedProduct){
                const quantity = storedCart[key];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setMobileCarts(savedCart);
    }, [products])

    const handelAddToCard = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = mobileCart.find(product => product.key === selectedProduct.key);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...mobileCart, selectedProduct];
        }
        else{
            const rest = mobileCart.filter(product => product.key !== selectedProduct.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setMobileCarts(newCart);
        addToDb(selectedProduct.key);
    }
    

    return (


        <div >
            <InsideNav></InsideNav>

            <div >
                <div class="hero  bg-neutral">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold text-white">50% Discount Every Product</h1>


                        </div>
                    </div>
                </div>

            </div>

            <div className='insidelayout' >
                <ul class="menu p-4 w-80 bg-base-400 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    <li className='text-left text-xl mb-10 font-bold text-accent'><img style={{ width: '40%', display: 'inline-block' }} src={mobile} alt="" /> Catagories : Mobile {products.length}</li>

                    <li className=''><Link to= {'/car'}><AiOutlineCar></AiOutlineCar> <h2 className='text-md'>Vehicles</h2></Link></li>

                    <li><Link to={'/women-fashion'}> <BiHappyAlt /><h2>Women-Fashion</h2></Link></li>

                    <li><Link to={'/hobbies'}><MdSportsSoccer></MdSportsSoccer> <h2>Hobbies</h2></Link></li>

                    <li><Link to={'dashboard'}>< GrMonitor></GrMonitor> Electronics</Link></li>

                    <li><Link to={'dashboard'}><AiOutlineHome></AiOutlineHome> Home-Living</Link></li>

                    <li><Link to={'dashboard'}><MdOutlineMiscellaneousServices></MdOutlineMiscellaneousServices> Services</Link></li>

                    <li><Link to={'dashboard'}><BiHappyAlt /> Men-Fashion</Link></li>

                    <li><Link to={'dashboard'}><GrServicePlay></GrServicePlay> Overseas</Link></li>
                </ul>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 '>
                    {
                        products.map(handset => <Handset
                            key={handset.id}
                            handset={handset}
                            handelAddToCard={handelAddToCard}
                        ></Handset>)
                    }
                </div>

                <div className="card w-72 h-96 bg-base-100 shadow-xl">
                <Cart cart={mobileCart}></Cart>
            </div>
            </div>
            

        </div>

    );
};

export default Mobile;