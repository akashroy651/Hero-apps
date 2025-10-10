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
            <h1>hello ami hero</h1>
        </div>
    );
};

export default Hero;