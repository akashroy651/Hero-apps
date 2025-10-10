import React from 'react';
import heroimage from '../../assets/hero.png';
const Banner = () => {
    return (
        <div>
                <div className='text-center w-[1440px] mx-auto'>
            <div className=' text-7xl'>
                <h1 className='text-[rgb(0,25,49)]'>We Build </h1>
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
                <img src={heroimage} className='justify-center' alt="" />
            </div>
           
        </div>
           <section className='bg-[#632EE3] text-white text-center '>
                <div className='pt-20 pb-20'>
                    <div className='mb-10'>
                        <h1 className='font-bold text-5xl'>Trusted by Millions, Built for You</h1>
                    </div>
                    <div className='flex justify-center gap-8'>
                        <div className=''>
                        <h6>tOtal Downloads</h6>
                        <h1 className='font-extrabold text-[64px]'>29.6M</h1>
                        <h5 className='text-[16px] '>21% more than last month</h5>
                    </div>
                    <div>
                        <h6>tOtal Downloads</h6>
                        <h1 className='font-extrabold text-[64px]'>29.6M</h1>
                        <h5 className='text-[16px] '>21% more than last month</h5>
                    </div>
                    <div>
                        <h6>tOtal Downloads</h6>
                        <h1 className='font-extrabold text-[64px]'>29.6M</h1>
                        <h5 className='text-[16px] '>21% more than last month</h5>
                    </div>
                    </div>
                </div>
            </section>
        </div>
      
    );
};

export default Banner;