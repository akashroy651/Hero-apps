import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppsDetails = () => {

    const {id} =useParams();
    const Id =parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.appId == Id)
    // console.log( typeof id,data)
    console.log(data)
console.log(singleApp)
    // const {title} = singleApp;
    return (
        <div>
            <h1>hello appsDetails</h1>
            {/* <h2>{title} </h2> */}
        </div>
    );
};

export default AppsDetails;