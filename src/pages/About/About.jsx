import React from 'react';
import { useLoaderData } from 'react-router';
import Total from '../Total/Total';

const About = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            <Total data={data}></Total>
        </div>
    );
};

export default About;