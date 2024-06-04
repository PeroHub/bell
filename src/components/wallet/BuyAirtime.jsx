import React, { useState } from 'react';

import airtel from "../../assets/airtel.png"
import mtn from "../../assets/mtn.png"
import mobile9 from "../../assets/9mobile.png"
import glo from "../../assets/glo.png"
import eye from "../../assets/eye.png"





const BuyAirtime = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleConfirm = () => {
    // Handle the top-up logic here
    console.log(`Phone Number: ${phoneNumber}, Amount: ${amount || selectedAmount}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-20%">
        <h1 className="text-lg text-[#101828] font-bold mb-4 text-center">Buy Airtime</h1>
        
        <div className="bg-gray-100 p-4 rounded-lg border-2 border-[#7B87B9] mb-4">
            <div className='flex space-x-2 items-center'>
                <p className="text-sm text-[#4A5995]">Total wallet balance</p>
                <img src={eye} alt="eye" className='h-3 w-3' />
            </div>
          <p className="text-2xl font-semibold text-[#253572]">₦ 8,620.00</p>
        </div>
        
        <section className="flex justify-between items-center mb-4">
          <img src={mobile9} alt="9mobile" className="w-12 h-12" />
          <img src={airtel} alt="Airtel" className="w-12 h-12" />
          <img src={glo} alt="Glo" className="w-12 h-12" />
          <img src={mtn} alt="MTN" className="w-12 h-12" />
        </section>

        <section className='mt-2'>
            <label htmlFor="" className='text-[#344054] text-sm font-semibold'>Phone Number</label>
            <input
            type="text"
            placeholder="Type phone number"
            className="w-full px-4 py-2 mb-4 mt-2 border rounded-lg"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
        </section>
        
        <section>
            <label htmlFor="" className='text-[#344054] text-sm font-semibold'>Select Amount</label>
            <div className="grid grid-cols-3 gap-4 mb-4 mt-2">
            {[50, 100, 200, 500, 1000, 2000].map((amt) => (
                <button
                key={amt}
                className={`px-4 py-2 rounded-lg border ${
                    selectedAmount === amt ? 'bg-[#D9DDED] text-[#4A5995]' : 'bg-gray-100'
                }`}
                onClick={() => setSelectedAmount(amt)}
                >
                ₦ {amt}
                <p className={`text-xs text-gray-500 ${
                    selectedAmount === amt ? 'text-[#7B87B9]' : 'bg-gray-100'
                } `}>Pay ₦ {amt - amt * 0.01}</p>
                </button>
            ))}
            </div>
        </section>
        
        <section>
            <label htmlFor="" className='text-[#344054] text-sm font-semibold'>Amount</label>
            <input
            type="text"
            placeholder="Type preferred amount"
            className="w-full px-4 py-2 mb-4 mt-2 border rounded-lg"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
        </section>
        
        <div className="flex justify-between space-x-2 mt-4">
          <button
            className="px-4 py-2 bg-white border-2 border-[#CCCCCC] text-[#253572] rounded-lg w-[50%] flex justify-center items-center"
            onClick={() => {
              setPhoneNumber('');
              setAmount('');
              setSelectedAmount(null);
            }}
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
  );
};

export default BuyAirtime;
