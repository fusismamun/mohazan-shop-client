import React from 'react';
import { Link } from 'react-router-dom';
import mobile from '../Img/smartphone.png'
import car from '../Img/car.png';
import fashion from '../Img/fashion-designer.png';
import hobbies from '../Img/hobbis.png';
import electronics from '../Img/electronic-device.png';
import house from '../Img/house.png';
import services from '../Img/customer-service.png';
import men from '../Img/mens-f.png';
import other from '../Img/surprise-box.png';




const Catagories = () => {
    return (
        <div>
            <h1 className='text-left mt-5 mx-32 text-secondary font-bold text-2xl  underline decoration-wavy '>Categories</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mx-32 ml-48 p-5 min-w-0 '>
                <Link to={"mobile"}>
                    <div className="card lg:card-side bg-base-100 w-52 p-7">
                        <figure>
                            <img style={{width:'3em'}} src={mobile} alt="" />
                            </figure>
                        <p className="card-title justify-center text-secondary font-medium ml-2">Mobile</p>
                    </div>
                </Link>
                <Link to={"car"}>
                    <div>
                    <div className="card lg:card-side bg-base-100  w-48  p-5 ">
                        <figure>
                            <img style={{width:'3.5em', marginLeft:'-10px'}} src={car} alt="" />
                        </figure>
                        <p className="card-title justify-center text-secondary font-medium ml-2">Vehicles</p>
                    </div>
                    </div>
                </Link>
                <Link to={"women-fashion"}>
                    <div className="card lg:card-side bg-base-100  w-52 p-5">
                        <figure>
                            <img style={{width:'3.5em'}} src={fashion}/>
                        </figure>
                        <p className="card-title justify-center text-secondary font-medium ml-2">Women's Fashion</p>
                    </div>
                </Link>
                <Link to={"hobbies"}>
                    <div className="card lg:card-side bg-base-100  w-48 p-5">
                        <figure>
                            <img style={{width:'3.5em'}} src={hobbies} alt="" />
                        </figure>
                        <p className="card-title justify-center text-secondary font-medium ml-2">Hobbies</p>
                    </div>
                </Link>
                <Link to={"electronic"}>
                    <div className="card lg:card-side bg-base-100  w-48 p-5">
                        <figure>
                            <img style={{width:'4em'}} src={electronics} alt="" />
                        </figure>
                        <p className="card-title justify-center text-secondary font-medium ml-2">Electronics</p>
                    </div>
                </Link>
                <Link to={"home-living"}>
                    <div className="card lg:card-side bg-base-100  w-48 p-5">
                        <figure>
                            <img style={{width:'3.4em'}} src={house} alt=""/></figure>
                        <p className="card-title justify-center text-secondary font-medium ml-2">Home & Living</p>
                    </div>
                </Link>
                <Link to={"service"}>
                    <div className="card lg:card-side bg-base-100  w-48 p-5">
                        <figure>
                            <img style={{width:'3.5em'}} src={services} alt="" />
                        </figure>
                        <p className="card-title justify-center text-secondary font-medium ml-2">Services</p>
                    </div>
                </Link>
                <Link to={"men-fashion"}>
                    <div className="card lg:card-side bg-base-100  w-48 p-5">
                        <figure >
                            <img style={{width:'3.5em'}} src={men} alt="" />
                        </figure>
                        <p className="card-title justify-center text-secondary font-medium ml-2">Men's Fashion</p>
                    </div>
                </Link>
                <Link to={"job"}>
                    <div className="card lg:card-side bg-base-100  w-48 p-5">
                        <figure>
                            <img style={{width:'3em'}} src={other} alt="" />
                        </figure>
                        <p className="card-title justify-center text-secondary font-medium ml-2">Overseas Jobs</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Catagories;