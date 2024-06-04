import React, { useState } from 'react';
import topup from "../../assets/topup.png"
const TopUpWallet = () => {
  const [amount, setAmount] = useState('');

  const handleConfirm = () => {
    // Handle the top-up logic here
    console.log(`Top-up amount: ${amount}`);
  };

  return (
    <div className="flex  justify-center bg-[#EDEDED] h-screen">
        <section className='w-[40%] mt-14'>
            <div className='mb-10'>
                <h1 className="text-3xl font-bold">
                    How much do you want to top-up.
                </h1>
                <hr  className='bg-[#FF6600] w-[64px] h-[2px]'/>
            </div>

            <div className='w-[100%] flex items-center'>

                <div className="bg-white p-6 w-[60%] rounded-lg shadow-lg ">
                    <div className='flex flex-col items-center justify-center'>
                        <img src={topup} alt="topup" />
                        <h2 className="text-xl font-semibold mt-2 mb-4">Top-up your wallet</h2>
                    </div>

                    <div>
                        <p className="mb-2 mt-2 text-center text-[#667085]">Enter your amount you wish to add to your wallet.</p>
                        <label htmlFor="pin" className='text-[#344054]'>Pin</label>
                        <input
                        type="text"
                        placeholder="e.g 50,000"
                        className="w-full px-4 py-2 mb-4 border rounded-lg"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <div className="flex space-x-2">
                        <button
                            className="px-4 py-2 bg-white border-2 border-[#CCCCCC] text-[#253572] rounded-lg w-[50%] flex justify-center items-center"
                            onClick={() => setAmount('')}
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
            </div>
        </section>

    </div>
  );
};

export default TopUpWallet;
