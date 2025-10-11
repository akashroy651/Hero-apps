import React from 'react';
import heroimage from '../../assets/hero.png';
import playstore from '../../assets/google-play.png'
import appstore from '../../assets/app-store.png'
 
const Banner = () => {

    const playStoreClick = () =>{
         window.open("https://play.google.com/store/games?hl=en", "_blank");
    }

    const appStore = ()=>{
        window.open("https://www.apple.com/app-store/","_blank")
    }

    return (
        <div>
                <div className='text-center lg:w-[1440px] lg:w-[20px] mx-auto'>
            <div className=' text-7xl'>
                <h1 className='text-[rgb(0,25,49)] font-bold'>We Build </h1>
                <span className='text-[#8148EA] font-black'>Productive </span>
                 <span className='text-[#001931] font-bold'>Apps</span>
            </div>
            <div className='mt-5  text-[#627382]'>
                 <p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>
                 Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className='mt-4'>
                <button onClick={playStoreClick} className='btn mr-2'>
                    <img src={playstore} className='w-5' alt="" />
                     Google Play</button>
                <button onClick={appStore} className='btn' >
                    <img src={appstore} className='w-5' alt="" />
                    App Store</button>
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