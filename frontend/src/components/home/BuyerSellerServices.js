import React from 'react';
import Modal from '../modal';
import circle_icon from '../assets/circle_icon.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.png';
import icon8 from '../assets/icon8.png';
import icon9 from '../assets/icon9.png';
import icon10 from '../assets/icon10.png';
import icon11 from '../assets/icon11.png';

function BuyerSellerServices() {
  return (
    <div className="px-10 py-20 bg-gradient-to-tr from-black via-black to-[#2a0530] text-white">
      {/* Header section with title and image */}
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-8xl text-white text-center">
          Our Services
        </h1>
      </div>

      {/* Circle Icon */}
      <div className="flex items-center justify-center sm:mb-8 mb-0">
        <img
          src={circle_icon}
          alt="Vision"
          className="w-10 h-10 rounded-full border-4 border-gray-300 shadow-lg"
        />
      </div>

      {/* Horizontal line and vertical line styling */}
      <div className="relative flex items-center justify-center sm:mb-8 mb-0">
        {/* Left Vertical Line */}
        <div className="border-l border-white h-16 top-1/2 transform -translate-y-1/6 lg:-translate-y-1/2"></div>

        {/* Horizontal Line */}
        <div className="absolute w-1/2 border-t border-white top-1/2 transform -translate-y-1/2 sm:block hidden"></div>

        {/* Right Vertical Lines */}
        <div className="absolute right-1/4 border-l border-white h-16 top-1/2 transform -translate-y-1/6 sm:block hidden"></div>
        <div className="absolute left-1/4 border-l border-white h-16 top-1/2 transform -translate-y-1/6 sm:block hidden"></div>
      </div>

      {/* Service Boxes */}
      <div className="flex flex-col md:flex-row gap-8 py-10">
        {/* Box 1: Buyers Services */}
        <div className="flex-1 flex items-center justify-center">
          <Modal.Container>
            <div className="w-[310px] h-[450px] rounded-lg p-6 shadow-lg flex flex-col justify-start items-center">
              <h2 className="text-2xl font-semibold mb-4">Buyers Services:</h2>
              <div className="space-y-3">
              <div>
                <div className="flex items-center">
                    <img src={icon6} alt="LLM Agent" className="w-10 h-10 shadow-lg" />
                    <p className="text-lg pl-2 font-semibold">GPU Software Consulting.</p>
                  </div>
                </div>
                <div>
                    <div className="flex items-center">
                      <img src={icon4} alt="RAG Optimization" className="w-10 h-10 shadow-lg" />
                      <p className="text-lg pl-2 font-semibold">LLM Agent Creation Services.</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center">
                      <img src={icon2} alt="Data Center" className="w-10 h-10 shadow-lg" />
                      <p className="text-lg pl-2 font-semibold">Synthetic Data Services.</p>
                    </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <img src={icon1} alt="Data Center" className="w-10 h-10 shadow-lg" />
                    <p className="text-lg pl-2 font-semibold">Adversarial AI Solutions.</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <img src={icon3} alt="Synthetic Data" className="w-10 h-10 shadow-lg" />
                    <p className="text-lg pl-2 font-semibold">RAG Optimization.</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center">
                    <img src={icon5} alt="LLM Agent" className="w-10 h-10 shadow-lg" />
                    <p className="text-lg pl-2 font-semibold">Database Optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Container>
        </div>

        {/* Box 2: Seller Services */}
        <div className="flex-1 flex items-center justify-center">
          <Modal.Container>
            <div className="w-[310px] h-[450px] rounded-lg p-6 shadow-lg flex flex-col justify-start items-center">
              <h2 className="text-2xl font-semibold mb-4">Seller Services:</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center">
                    <img src={icon11} alt="Database Optimization" className="w-10 h-10 shadow-lg" />
                    <p className="text-lg pl-2 font-semibold">Hardware Procurement Services.</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <img src={icon7} alt="Database Optimization" className="w-10 h-10 shadow-lg" />
                    <p className="text-lg pl-2 font-semibold">Colocation Brokerage Services.</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <img src={icon8} alt="Database Optimization" className="w-10 h-10 shadow-lg" />
                    <p className="text-lg pl-2 font-semibold">Equipment Financing.</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <img src={icon9} alt="Database Optimization" className="w-10 h-10 shadow-lg" />
                    <p className="text-lg pl-2 font-semibold">Data Center Consulting.</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <img src={icon10} alt="Database Optimization" className="w-10 h-10 shadow-lg" />
                    <p className="text-lg pl-2 font-semibold">GPU Software Solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Container>
        </div>
      </div>
    </div>
  );
}

  

export default BuyerSellerServices;