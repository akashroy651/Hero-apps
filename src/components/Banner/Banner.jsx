import React from 'react';
import heroimage from '../../assets/hero.png';
const Banner = () => {
    return (
        <div className='text-center'>
            <div className=' text-7xl'>
                <h1 className='text-[#001931]'>We Build </h1>
                <span className='text-[#8148EA]'>Productive </span>
                 <span className='text-[#001931]'>Apps</span>
            </div>
            <div className='mt-5  text-[#627382]'>
                 <p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>
                 Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className='mt-4'>
                <button className='btn mr-2'>Google Play</button>
                <button className='btn' >App Store</button>
            </div>
            <div className=' w-[900px] mx-auto mt-5'>
                <img className='justify-center' src={heroimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;