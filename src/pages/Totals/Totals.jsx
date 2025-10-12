import React from 'react';
import img from '../../assets/demo-app (2).webp'
import { LuDownload } from "react-icons/lu";
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router';

const Totals = ({totalApps}) => {
    console.log(totalApps)

    const {title,companyName,id} = totalApps
    return (
        <Link to={`/appsDetails/${id}`}>
        
             <div>
              <div className="card bg-base-100 w-85 px-3 pt-2 shadow-sm">
                <figure className=" ">
                  <img
                    // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                   src={img}
                    alt="Shoes"
                    className="rounded-xl h-80"
                  />
                </figure>
                <div className=" h-[100px]">
                  <h2 className="mt-2 mb-6  bg-amber-600 w-full font-medium text-[20px] ">{title}:{companyName}</h2>
                  
                  <div className="card-actions justify-between ">
                    <button className="btn h-[30px] bg-gray-200 text-[#00D390] "><LuDownload />9M</button>
                    <button className="btn h-[30px] bg-amber-100 text-[#FF8811] "><IoStar />5</button>
                    
                  </div>
                </div>
              </div>
              
                
            </div>

        </Link>
    );
};

export default Totals;