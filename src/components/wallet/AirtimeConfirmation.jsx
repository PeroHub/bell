import React from 'react';

const AirtimeConfirmation = () => {
  const phoneNumber = "2347035864526";
  const amount = 1000;
  const walletBalance = "₦ 8.5k";
  const transactionFee = "₦ 0.00";
  const paymentFor = "Airtime";
  const network = "MTN-NG";

  const handleConfirm = () => {
    // Handle the confirmation logic here
    console.log('Airtime purchase confirmed');
  };

  const handleCancel = () => {
    // Handle the cancel logic here
    console.log('Airtime purchase cancelled');
  };

  return (
    <div className="flex  justify-center h-screen">
        <section className='mt-14'>
            <div className='my-4'>
                <h1 className="text-3xl font-bold">Airtime purchase confirmation</h1>
                <hr  className='bg-[#FF6600] w-[64px] h-[2px]'/>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-[100%]">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className='text-center text-sm text-[#7B87B9]'>To:</p>
                    <p className="text-center text-lg font-semibold text-[#253572] my-2">{phoneNumber}</p>
                    <p className='text-center text-sm text-[#7B87B9]'>Amount</p>
                    <p className="text-center text-2xl font-bold text-[#253572] mt-2">₦ {amount}</p>
                </div>
                <div className="mb-4">
                <div className="flex justify-between py-2">
                    <span className="text-[#7B87B9]">From:</span>
                    <span className="font-semibold text-[#4A5995]">{walletBalance}</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-[#7B87B9]">Transaction Fee:</span>
                    <span className="font-semibold text-[#4A5995]">{transactionFee}</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-[#7B87B9]">Payment For:</span>
                    <span className="font-semibold text-[#4A5995]">{paymentFor}</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-[#7B87B9]">Network:</span>
                    <span className="font-semibold text-[#4A5995]">{network}</span>
                </div>
                </div>
                <div className="flex justify-between space-x-2">
                    <button
                        className="px-4 py-2 bg-white border-2 border-[#CCCCCC] text-[#253572] rounded-lg w-[50%] flex justify-center items-center"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-[#0D1A4F] border-2 border-[#0D1A4F] text-white rounded-lg w-[50%] flex justify-center items-center"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </section>
    </div>
  );
};

export default AirtimeConfirmation;
