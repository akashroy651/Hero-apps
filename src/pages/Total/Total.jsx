import React, { Suspense } from "react";
import Totals from "../Totals/Totals";

const Total = ({ data }) => {
  return (
    <div className="w-[1440px] mx-auto">
      <div className="text-center mt-8">
        <h1 className="font-bold text-5xl mb-4">Our All Applications</h1>
        <p className="mb-8">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between">
          <h3>(15) Apps Found</h3>

          <label className="input mb-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
        <Suspense fallback={<span>loading........</span>}>
          <div className="w-[1440px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {data.map((totalApps) => (
              <Totals key={totalApps.id} totalApps={totalApps}></Totals>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Total;
