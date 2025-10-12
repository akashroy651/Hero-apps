import React from 'react';
import Banner from '../../components/Banner/Banner';
import Hero from '../Hero/Hero';
import { useLoaderData } from 'react-router';
import About from '../About/About';

const Home = () => {
    const data = useLoaderData();
    // console.log(data)


    
    return (
        <div>
            {/* <h1>hello ami home </h1> */}
            <Banner></Banner>
            <Hero data={data}></Hero>
           
        </div>
    );
};

export default Home;