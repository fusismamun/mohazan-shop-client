import React from 'react';
import banner1 from '../Img/banner-1.png';
import banner2 from '../Img/banner-2.png';





const HomeBanner = () => {
  
    return (
        <div>
            <div className='flex sm:mx-0 lg:mx-32 mt-16 mb-12 '>
                <div className='img' >
                    <img style={{ width:'90%' ,  height:'90%' }} src={banner1}/>
                </div>
                <div className='img' >
                    <img style={{width:'90%' , height:'90%' }} src={banner2} />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;