import React from 'react';
import aiimage2 from '../assets/aiimage2.png';

function OurVision() {
  return (
    <div className="flex items-center justify-center pb-20 min-h-screen text-gray-300 bg-gradient-to-tr from-black via-black to-[#2a0530]">      
      <div className="flex flex-col md:flex-row">

        {/* Text Section */}
        <div className="md:w-3/5 lg:ml-20 flex flex-col justify-center px-9 py-10">
          <h1 className=" text-8xl  text-transparent bg-clip-text bg-gradient-to-r to-purple-950 from-purple-300"
           >Our Vision</h1>
          <p className="text-2xl pt-10">
            At FP8, we’re transforming compute power into a <span className=" text-purple-400">tradable commodity,</span> making AI infrastructure as accessible as any other resource.
          </p>
          <p className="text-2xl pt-4">
            Compute, like any other commodity, deserves a <span className=" text-purple-400">transparent, two-way market</span> that determines its fair market value.
          </p>
          <p className="text-2xl pt-4">
            By unlocking innovative ways to trade, scale, and utilize compute resources, FP8 <span className=" text-purple-400">empowers global innovation, democratizes AI Access</span> and opens up 
            <span className=" text-purple-400"> new possibilities for AI-driven solutions worldwide.</span>
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center md:w-2/5">
          <img 
            src={aiimage2} 
            alt="Vision" 
            className="shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
}



export default OurVision;