import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <div className="bg-green-100 p-4 rounded-full mb-6 inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-6">This blog post has been published. Team members will be able to edit this post and republish changes.</p>
        <div className="border border-gray-300 rounded-lg p-4 text-left mb-6">
          <div className="flex justify-between items-center mb-4">
            <img src="https://via.placeholder.com/100x50" alt="bell" />
            <span className="font-medium">Transaction Details</span>
          </div>
          <div className="mb-4">
            <p className="text-gray-500">Amount Paid</p>
            <h2 className="text-2xl font-bold">N11,700.00</h2>
          </div>
          <div className="grid grid-cols-2 gap-y-2 text-gray-600">
            <p className="font-medium">Date & Time</p>
            <p>Nov 23, 2022, 22:18:24</p>
            <p className="font-medium">Reference no.</p>
            <p>JUVRVP504R</p>
            <p className="font-medium">Status</p>
            <p className="text-green-500 font-bold">Successful</p>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded mb-4">Download Receipt</button>
        <button className="w-full bg-blue-700 text-white py-2 rounded">Go back to Home</button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
