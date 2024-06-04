import React, {useState} from 'react'

import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import art from '../../assets/art.png'
import logo from '../../assets/newLogo.png'
import arrowDown from "../../assets/arrow-down.png"
import eye from "../../assets/eye-slash.png"
import circle from "../../assets/add-circle.png"
import call from "../../assets/call-icon.png"
import bill from "../../assets/bill.png"
import wifi from "../../assets/wifi.png"


const Header = () => {
    const [activeTab, setActiveTab] = useState('Home')
  const tabs = ['Home', 'Wallet', 'Terms Of Services', 'Contact'];

    return (
        <header className="bg-white shadow-sm pt-[60px] pr-[40px] pb-[20px] pl-[60px]">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div>
                    <img src={logo} alt="Bell Logo" className="" />
                </div>
                <div className="flex items-center bg-[#D9DDED] border border-[#7B87B9]  rounded-full">
                    <ul className="flex items-center space-x-12 px-8 p-4">
                        {tabs.map((item, index) => (
                            <li key={index} onClick={ () => {setActiveTab(item)}}  className={`text-gray-500 font-semibold px-4 rounded-full p-2 cursor-pointer hover:text-gray-900 ${ item == activeTab ? 'bg-[#4A5995] text-white hover:text-white' : ''}`}>{item}</li>
                        ))}
                        {/* <a href="/wallet" className="text-gray-900 font-semibold">Wallet</a>
                        <a href="/terms" className="text-gray-500 hover:text-gray-900">Terms of Service</a>
                        <a href="/contact" className="text-gray-500 hover:text-gray-900">Contact</a> */}
                    </ul>
                </div>
                <div className="flex items-center">
                    <Menu as="div" className="relative flex items-center space-x-2">
                        <div>
                            <Menu.Button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={art}
                                    alt="art"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/profile"
                                                className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'}`}
                                            >
                                                Your Profile
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/settings"
                                                className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'}`}
                                            >
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/logout"
                                                className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'}`}
                                            >
                                                Sign out
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                        <div className="flex space-x-2 items-center">
                            <p>Mali Manga</p>
                            <img src={arrowDown} alt="arrow down" className='h-5 w-5' />
                        </div>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

const WalletBalance = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="bg-[#0D1A4F] text-white w-[68%] flex flex-col relative items-center justify-center p-14 w-[80%] mt-14  rounded-2xl shadow-lg  text-center">
          <div className="flex items-center justify-center space-x-1">
            <p className='text-[#F8F9FE] text-sm'>Total wallet balance</p>
            <img src={eye} alt="eye" />
        </div>
          <div className=" font-bold mt-4 flex justify-center font-bold text-4xl"><p className='text-[#7B87B9]'>₦</p> <p className="text-6xl">10,620.00</p></div>
          <button className=" absolute bottom-[-12px] bg-[#7B87B9] space-x-2 flex items-center justify-center text-white py-2 px-4 rounded-full">
            <span><img src={circle} alt="circle" /></span>
            <span className='text-[#F8F9FE] font-bold text-base'>Top up</span>
          </button>
        </div>
      </div>
    );
  };

  const actions = [
    {
      title: "Buy Airtime",
      description: "Purchase Airtime Credits Instantly to Stay Connected on the Go.",
      icon: call, // Placeholder for an icon, replace with actual icons
    },
    {
      title: "Buy Data",
      description: "Stay Connected with Seamless Data Purchases for Your Online Needs.",
      icon: wifi, // Placeholder for an icon, replace with actual icons
    },
    {
      title: "Buy Airtime",
      description: "Simplify Your Finances: Effortlessly Settle Bills with Ease.",
      icon: bill, // Placeholder for an icon, replace with actual icons
    },
  ];

  const QuickActions = () => {
    return (
      <div className="mt-14 flex items-center justify-center">
        <div className="w-[68%] bg-white p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4 text-[#272727]">Quick Actions</h2>
          <div className="flex space-x-4">
            {actions.map((action, index) => (
              <div key={index} className="bg-[#D9DDED] p-6 rounded-lg shadow-md">
                <div className='p-2 rounded-full bg-white h-[36px] w-[36px] text-center mb-2'>
                    <img src={action.icon} alt="icon" className="text-4xl " />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#253572]">{action.title}</h3>
                <p className="text-[#4A5995] text-sm">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const transactions = [
    {
      date: "29 March, 2024 10:18:43 AM",
      amount: "₦ 7,600.00",
      type: "Withdraw",
      description: "DSTV",
      status: "Pending",
      statusClass: "text-yellow-500 bg-yellow-100",
      textClass: "bg-yellow-500",
    },
    {
      date: "29 March, 2024 10:18:43 AM",
      amount: "₦ 15,705.55",
      type: "Withdraw",
      description: "DSTV",
      status: "Unsuccessful",
      statusClass: "text-red-500 bg-red-100",
      textClass: "bg-red-500",
    },
    {
      date: "29 March, 2024 10:18:43 AM",
      amount: "₦ 15,705.55",
      type: "Top-Up",
      description: "DSTV",
      status: "Completed",
      statusClass: "text-green-500 bg-green-100",
      textClass: "bg-red-500",

    },
    {
      date: "29 March, 2024 10:18:43 AM",
      amount: "₦ 7,600.00",
      type: "Withdraw",
      description: "Airtime",
      status: "Unsuccessful",
      statusClass: "text-red-500 bg-red-100",
      textClass: "bg-red-500",
    },
  ];

  const RecentTransactions = () => {
    return (
      <div className="mt-14 bg-[#EDEDED] flex items-center justify-center">
        <div className="w-[68%] bg-white  rounded-lg shadow-md">
          <div className="flex justify-between p-6 items-center mb-4">
            <h2 className="text-xl font-semibold text-[#101828]">Recent Transactions</h2>
            <a href="#" className="text-[#1E90FF] bg-[#F9F5FF] px-2 py-1 rounded-full">See All</a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className='bg-[#EAECF0]'>
                <tr className='p-4'>
                  <th className="py-2 px-4 border-b text-[#667085]">DATE</th>
                  <th className="py-2 px-4 border-b text-[#667085]">AMOUNT</th>
                  <th className="py-2 px-4 border-b text-[#667085]">TYPE</th>
                  <th className="py-2 px-4 border-b text-[#667085]">DESCRIPTION</th>
                  <th className="py-2 px-4 border-b text-[#667085]">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="text-center p-4">
                    <td className="py-2 px-4 border-b text-[#667085]">{transaction.date}</td>
                    <td className="py-2 px-4 border-b text-[#667085]">{transaction.amount}</td>
                    <td className="py-2 px-4 border-b text-[#667085]">{transaction.type}</td>
                    <td className="py-2 px-4 border-b text-[#667085]">{transaction.description}</td>
                    <td className="py-2 px-4 border-b text-[#667085]">
                      <div className={`py-1 rounded-full text-xs space-x-2 font-semibold flex items-center justify-center ${transaction.statusClass}`}>
                        <span className={`h-2 w-2  rounded-full inline-block ${transaction.textClass}`}></span>
                        <span>{transaction.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };


export const Billpayment = () => {
  return (
    <div className='bg-[#EDEDED]'>
        <Header />
        <WalletBalance />
        <QuickActions />
        <RecentTransactions />
    </div>
  )
}
