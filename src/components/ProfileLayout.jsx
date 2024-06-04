import React, { useState } from 'react';
import edit from '../assets/edit.png'
import art from '../assets/art.png'

const TabbedLayout = () => {
  const [activeTab, setActiveTab] = useState('Personal Information');

  const tabs = ['Personal Information', 'Next of Kin', 'Trusted Contacts', 'Referrals'];



  return (
    <div className=" p-4 bg-[#EDEDED] min-h-[85vh] flex justify-center">
        <section className='border w-[70%]'>
            <div className='rounded-3xl p-2 bg-white mt-10 mb-5'>
                <div className="flex items-center justify-between bg-[#EDEDED] rounded-2xl p-2">
                    <div className="flex space-x-4">
                    {tabs.map((tab) => (
                        <button
                        key={tab}
                        className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-white text-black' : 'bg-[#EDEDED] text-[#999999]'}`}
                        onClick={() => setActiveTab(tab)}
                        >
                        {tab}
                        </button>
                    ))}
                    </div>
                    <div className='flex justify-center items-center gap-2 rounded-full bg-[#D9D9D9] p-2'>
                        <img src={edit} alt="edit" />
                        <button className="text-[#999999] hover:text-gray-900">Edit</button>
                    </div>
                </div>
            </div>

            <div className="rounded-lg">
                {activeTab === 'Personal Information' && ( 
                <section>
                    <div className="mb-5">
                        <div className="bg-gray-100 rounded-lg shadow-md">
                        <div className="flex items-center p-4 bg-white rounded-lg">
                            <img
                            src={art} // Replace with the actual image URL
                            alt="Profile"
                            className="w-14 h-14 rounded-full"
                            />
                            <div className="ml-4">
                            <h2 className="text-xl text-[#272727] font-bold">Juwaicy Manga</h2>
                            <p className="text-[#999999]">25 Trips Completed</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow p-4">
                        <section className='bg-[#F4F4F4] p-2 rounded-md'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <label className="block font-semibold text-[#999999]">First Name</label>
                                    <p className="text-[#272727] leading-4">Sunday</p>
                                </div>
                                <div>
                                    <label className="block mt-4 font-semibold text-[#999999]">Surname</label>
                                    <p className="text-[#272727] leading-4">Wanga</p>
                                </div>
                                <div>
                                    <label className="block mt-4 font-semibold text-[#999999]">Date of Birth</label>
                                    <p className="text-[#272727] leading-4">12/04/1983</p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <label className="block mt-4 font-semibold text-[#999999]">Email</label>
                                    <p className="text-[#272727] leading-4">sundaywanga@gmail.com</p>
                                </div>

                                <div>
                                    <label className="block mt-4 font-semibold text-[#999999]">Phone Number</label>
                                    <p className="text-[#272727] leading-4">+234 816 123 4567</p>
                                </div>

                                <div>
                                    <label className="block mt-4 font-semibold text-[#999999]">Phone Number</label>
                                    <p className="text-[#272727] leading-4">+234 816 123 4567</p>
                                </div>
                            </div>
                                     
                        </section>
                    </div>
                </section>
                )}

                {activeTab === 'Next of Kin' && (<>Next</>)}
                {activeTab === 'Trusted Contacts' && (<>Contacts</>)}
                {activeTab === 'Referrals' && (<>Refer</>)}

                
            </div>
        </section>
    </div>
  );
};


const ProfileLayout = () => {
  return (
    <section className="">
        <TabbedLayout />
    </section>
  );
};

export default ProfileLayout;
