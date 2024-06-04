import React from 'react'
import arrowLeft from "../assets/arrowLeft.png"
import logo from "../assets/newLogo.png"
import vertical from "../assets/vertical.jpg"
export const SubLayout = ({children}) => {
  return (
    <div>
        <section>
            <header className='bg-[#F8F9FE] pt-[50px] pr-[30px] pb-[10px] pl-[50px]'>
                <section className='flex w-[120px] justify-between items-center space-x-4'>
                    <img src={arrowLeft} alt="arrow" />
                    <img src={vertical} alt="vertical" />
                    <img src={logo} alt="logo" />
                </section>

                {/* {setValue !== undefined ? (
                    <section>Profile</section>
                ) : null} */}
            </header>
          </section>
        {children}
    </div>
  )
}
