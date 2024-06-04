import React from 'react'
import arrowLeft from "../assets/arrowLeft.png"
import logo from "../assets/logo.png"
import vertical from "../assets/vertical.jpg"
import icon from "../assets/featuredIcon.png"
import naira from "../assets/naira.png"
import wallet from "../assets/wallet.jpg"
import cards from "../assets/cards.jpg"
import paystack from "../assets/paystack.jpg"







export const PaymentMethod = () => {
  return (
    <div className='bg-[#EDEDED] min-h-[85vh]'>
      <div className='flex justify-center'>
        <section className='w-[30%] mt-[60px]'>
            <h2 className='color-[#0D1A4F] text-3xl font-bold leading-8'>Choose your payment method.</h2>
            <hr  className='bg-[#FF6600] w-[64px] h-[2px]'/>
          <div className='w-[100%] bg-[#FFFFFF] p-5 rounded-md shadow-md mt-8'>
            <div>
              <img src={icon} alt="icon" />
              <p className='leading-8 font-semibold text-lg mt-2 color-[#101828]'>Choose your payment method</p>
              <p className='color-[#667085] text-sm leading-5 font-normal'>Pay using</p>
            </div>
            <div className='mt-4 border border-[#EAECF0] p-4 rounded-md flex justify-between'>
              <div className='flex items-center gap-4'>
                <div className='border border-[#D9DDED] p-3 bg-[#FFFFFF] rounded-full'>
                  <img src={wallet} alt="wallet" />
                </div>
                <div>
                  <p className='color-[#7B87B9] font-normal text-xs leading-3'>Wallet balance</p>
                  <p className='flex items-center gap-1 mt-1 justify-center'>
                    <span><img src={naira} alt="naira" /></span>
                    <span className='color-[#4A5995] font-semibold text-base'>8,620.00</span>
                  </p>
                </div>
              </div>
              <div><input className='rounded-full' type="checkbox" name="" id="" /></div>
            </div>

            <div className='mt-4 border border-[#EAECF0] p-4 rounded-md flex justify-between'>
              <div className='flex items-center gap-4'>
                <div className='border border-[#D9DDED] p-3 bg-[#FFFFFF] rounded-full'>
                  <img src={cards} alt="wallet" />
                </div>
                <div>
                  <p className='color-[#7B87B9] font-normal text-xs leading-3'>Debit Card</p>
                  <p className='flex items-center gap-1 mt-1 justify-center'>
                    <span className='color-[#7B87B9] font-normal text-xs leading-3'>Experience secure payments through                       </span>
                    <span><img src={paystack} alt="paystack" /></span>
                  </p>
                </div>
              </div>
              <div><input type="checkbox" name="" id="" /></div>
            </div>

            {/* <div>
              <div>
                <div>
                  <img src={wallet} alt="wallet" />
                </div>
                <div>
                  <p>Wallet balance</p>
                  <p>
                    <span><img src={naira} alt="naira" /></span>
                    <span>8,620.00</span>
                  </p>
                </div>
              </div>
              <div><input type="checkbox" name="" id="" /></div>
            </div> */}

            <div className=' mt-6 flex justify-between items-center g-1'>
              {/* <button className='flex justify-center p-2 rounded-md  text-sm leading-4 font-semibold items-center w-[47%] rounded-md border border-[#CCCCCC] border-[transparent]'>Go Back</button> */}
              <button className='flex justify-center p-2 rounded-md items-center w-[47%] rounded-md border color-[#253572]  border-[#CCCCCC] border-[transparent]'>Go Back</button>

              <button className='flex justify-center p-2 rounded-md items-center w-[47%] rounded-md border color-[#FFFFF] text-white border-[#0D1A4F] bg-[#0D1A4F]'>Confirm</button>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
