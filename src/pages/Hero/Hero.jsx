import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [allHero, setAllHero] = useState([]);

    useEffect(()=>{
        fetch("heroData.json")
        .then(res =>res.json())
        .then(data =>{
            setAllHero(data)
        })
    },[])

    return (
        <div>
            <div className='text-center mb-10'>
                <h1 className='text-5xl p-3'>Trending Apps</h1>
            <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
        </div>
    );
};

export default Hero;