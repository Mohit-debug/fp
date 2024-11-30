import React from 'react';

function Header() {
  return (
    <div 
      className="flex flex-col justify-center items-center h-screen text-white bg-gradient-to-br from-black via-black to-[#2a0530] bg-cover bg-center"
    >
      <h1 className="text-7xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-purple-900 from-purple-400">FP8</h1>
      
      <p className="font-bold text-2xl sm:text-4xl mt-6 sm:mt-9 px-4 sm:px-0 text-center sm:text-center">
        Redefining Compute as a Commodity
      </p>
      <p className="font-bold text-xl sm:text-2xl mt-4 sm:mt-9 px-4 sm:px-0 text-center sm:text-center">
        Democratizing compute by building a fully transparent two-way marketplace for all things AI.
      </p>

      <a 
        href="https://fpinfinity.xyz/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-6 sm:mt-14 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-br from-purple-900 to-purple-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl sm:text-2xl text-center mb-2"
      >
        Explore AI MarketPlace &gt;
      </a>
    </div>
  );
}

export default Header;
