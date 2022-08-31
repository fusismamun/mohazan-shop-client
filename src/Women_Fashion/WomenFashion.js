import React from 'react';
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
import { Link } from 'react-router-dom';

const WomenFashion = () => {
    return (
        <div>
            <div>
            <InsideNav></InsideNav>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                                    {/* <!-- Sidebar content here --> */}
                                  
                                    <li>Catagories</li>
                                    <li><Link to ={'/mobile'}><FaMobileAlt></FaMobileAlt>Mobile</Link></li>
                                    <li><Link to={'/hobbies'}><MdSportsSoccer></MdSportsSoccer> Hobbies</Link></li>
                                    <li><Link to={'/electronic'}>< GrMonitor></GrMonitor> Electronics</Link></li>
                                    <li><Link to={'dashboard'}><AiOutlineHome></AiOutlineHome> Home-Living</Link></li>
                                    <li><Link to={'dashboard'}><MdOutlineMiscellaneousServices></MdOutlineMiscellaneousServices> Services</Link></li>
                                    <li><Link to={'dashboard'}><BiHappyAlt /> Men-Fashion</Link></li>
                                    <li><Link to={'dashboard'}><GrServicePlay></GrServicePlay> Overseas</Link></li>
                                </ul>
        </div>
        </div>
    );
};

export default WomenFashion;