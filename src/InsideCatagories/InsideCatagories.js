import React from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
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
import cart1 from '../Img/cat-1.png'
import './Mobile.css';


const InsideCatagories = () => {
    return (
        <>
        
        <div>
        <InsideNav></InsideNav>
                        <h2 className='text-lg font-bold text-left ml-16 text-secondary'><FcPhoneAndroid style={{ height: '100px', fontSize:'2.5em', color: "#000", marginBottom: '-25px' }}></FcPhoneAndroid>Mobile Phone: </h2>
                    </div>
           <div>
                        <div class="drawer drawer-mobile">
                            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                            <div class="drawer-content ">
                               <Outlet></Outlet>
                                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                            </div>
                            <div class="drawer-side">
                                <label for="my-drawer-2" class="drawer-overlay"></label>
                                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                                    {/* <!-- Sidebar content here --> */}
                                  
                                    <li>Catagories</li>
                                    <li><Link to ={'mobiles'}><FaMobileAlt></FaMobileAlt>Mobile</Link></li>
                                    
                                    <li><Link to={'car'}><AiOutlineCar></AiOutlineCar> Vehicles</Link></li>
                                    <li><Link to={'dashboard'}> <BiHappyAlt />Women-Fashion</Link></li>
                                    <li><Link to={'hobbies'}><MdSportsSoccer></MdSportsSoccer> Hobbies</Link></li>
                                    <li><Link to={'dashboard'}>< GrMonitor></GrMonitor> Electronics</Link></li>
                                    <li><Link to={'dashboard'}><AiOutlineHome></AiOutlineHome> Home-Living</Link></li>
                                    <li><Link to={'dashboard'}><MdOutlineMiscellaneousServices></MdOutlineMiscellaneousServices> Services</Link></li>
                                    <li><Link to={'dashboard'}><BiHappyAlt /> Men-Fashion</Link></li>
                                    <li><Link to={'dashboard'}><GrServicePlay></GrServicePlay> Overseas</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
        </>
    );
};

export default InsideCatagories;