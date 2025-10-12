import React from 'react';
import image from '../../assets/App-Error.png'

const ErrorPage = () => {
    return (
        <div className='flex  justify-center m-40'>
            {/* <h1>Page not Found</h1> */}
            <img src={image} alt="" />
        </div>
    );
};

export default ErrorPage;