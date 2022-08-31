import React from 'react';
import logo from '../Img/logo-orginial.png'
import { Link } from 'react-router-dom';


const InsideNav = () => {
    return (
        <div class="navbar bg-base-100 drop-shadow-md mb-5">
            <div class="navbar-start">
                <div class="dropdown mb-16">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/'}><h2 className='text-secondary font-bold'>Home</h2></Link></li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <img style={{width:'20%'}} src={logo} alt="" />
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to={'/'}><h2 className='text-secondary font-bold'>Home</h2></Link></li>
                    <li><Link to={'/order'}><h2 className='text-secondary font-bold'>Orders</h2></Link></li>
                    <li><Link to={'/'}><h2 className='text-secondary font-bold'>About</h2></Link></li>
                    
                </ul>
            </div>
            
        </div>
    );
};

export default InsideNav;