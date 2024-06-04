import React from 'react';
import purchace from "../../assets/purchace-success.jpeg"

const TopUpSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" text-center">
        <div className="text-6xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-7 7-7" />
            <path d="M5 12h14" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-[#253572]">Top-Up Successful!</h1>
        <p className=" mb-6 text-[#7B87B9]">Congratulations! Your wallet has been successfully topped up.</p>
        <button className="bg-[#0D1A4F] text-md text-white px-8 py-2 rounded">View Your Wallet</button>
      </div>
    </div>
  );
}

export default TopUpSuccess;
