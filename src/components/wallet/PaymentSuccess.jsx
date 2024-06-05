import React from 'react';
import ticked from '../../assets/ticked.png'
import logo from '../../assets/newLogo.png'
import download from '../../assets/download.png'
import copy from '../../assets/copy.png'


const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
            <section>
                <div className="bg-green-100 p-4 rounded-full mb-4 inline-block">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
                </svg> */}
                    <img src={ticked} className='h-5 w-5' alt="tick" />
                </div>

                <div>
                    <h1 className="text-2xl font-bold mb-2 text-[#101828]">Payment Successful</h1>
                    <p className="text-[#667085] text-sm mb-6 leading-2">This blog post has been published. Team members will be able to edit this post and republish changes.</p>
                </div>
            </section>
        <section className="border border-[#D9DDED] rounded-3xl mb-2">
            <div className=''>
                <div className="flex justify-between items-center px-8 py-6">
                    <img src={logo} className='h-10 w-15' alt="bell" />
                    <span className="font-medium text-[#253572]">Transaction Details</span>
                </div>
                <hr className='bg-[#D9DDED]' />
                <div className=" py-4 px-8">
                    <p className="text-[#7B87B9]">Amount Paid</p>
                    <h2 className="text-2xl font-bold">N11,700.00</h2>
                </div>
                <div className=" text-gray-600 px-6 py-4 ">
                    <div className='flex justify-between items-center'>

                        <p className="font-medium text-[#7B87B9]">Date & Time</p>
                        <p className='text-[#253572]'>Nov 23, 2022, 22:18:24</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <p className="font-medium text-[#7B87B9]">Reference no.</p>
                        <div className='flex items-center justify-center space-x-2'>
                        <p className='text-[#253572]'>JUVRVP504R</p>
                        <img src={copy} alt="copy" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <p className="font-medium">Status</p>
                        <div className='flex items-center justify-center space-x-2'>
                            <span className='h-2 w-2  rounded-full text-[#33CC33]'></span>
                            <span className="text-green-500 font-bold">Successful</span>
                        </div>
                    </div>
                    <p className='text-center m-4 text-[#7B87B9] text-sm'>Copyright © Bell Transport 2023. All rights reserved</p>
                </div>
            </div>

          <div>
            <button className="w-full bg-[#D9DDED] flex items-center justify-center space-x-2  text-white py-5 rounded-b-3xl">
                <span><img src={download} alt="download" /></span>
                <span className='text-[#253572] text-sm'>Download Receipt</span>
            </button>
          </div>
        </section>

        <section className='mt-4'>
            <button className="w-full bg-[#0D1A4F] text-white py-4 rounded-lg rounded font-bold">Go back to Home</button>
        </section>
      </div>
    </div>
  );
}

export default PaymentSuccess;
