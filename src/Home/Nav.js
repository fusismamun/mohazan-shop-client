import React from 'react';
import './Nav.css';
import { AiOutlineSearch } from "react-icons/ai";
import logo from '../Img/logo-orginial.png';


const style = { color: "white", fontSize: "1.5em" }
const Nav = () => {
    return (
        <div className="navbar bg-white pb-5  grid grid-cols-3 gap-4 drop-shadow-md">
            <div className='place-self-start ml-2'>
                <img style={{width:'40%'}} src={logo} alt="" />
            </div>
            <div className="place-self-center mt-20 ">
                <div className="form-control ">
                   
                    <div className="input-group relative w-full ">
                        <input type="text" placeholder="Search…" className="input input-bordered input-error   button-search-width  .search-background h-14 " />
                        <button className='absolute mt-1 mr-1 right-0'  style={{ padding:"10px", backgroundColor:"#FF6347", border:"1px solid #FF6347", borderRadius:"80px"}}><AiOutlineSearch style={style}></AiOutlineSearch></button>
                        
                    </div>
                
                </div>
            </div>
            <div className='place-self-start ml-20'>
                <h1 className=" text-lg font-bold self-start text-[#ff6347]">login</h1>
            </div>
        </div>
    );
};

export default Nav;