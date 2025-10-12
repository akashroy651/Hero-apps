import React, { Suspense, useEffect, useState } from 'react';
import Apps from '../Apps/Apps';
import { Link } from 'react-router';
import Total from '../Total/Total';

const Hero = ({data}) => {
    const [allHero, setAllHero] = useState([]);

    // useEffect(()=>{
    //     fetch("heroData.json")
    //     .then(res =>res.json())
    //     .then(data =>{
    //         setAllHero(data)
    //     })
    // },[])

    return (
        <div>
            <div className='text-center mb-10'>
                <h1 className='text-5xl p-3'>Trending Apps</h1>
            <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

            <Suspense fallback={<span>loading................</span>}>
            {/* <Apps data={data}></Apps> */}
               <div className='w-[1440px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10'>
                 {
                    data.map((singleApps)=><Apps key={singleApps.id} singleApps={singleApps}></Apps>)
                }
               </div>
                <Link to='/about'><button className='btn bg-amber-600 text-white font-semibold text-[22px]'>Show All</button></Link>
            </Suspense>
            </div>

          
        </div>
    );
};

export default Hero;