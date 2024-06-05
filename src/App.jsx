import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { PaymentMethod } from './components/PaymentMethod'
import { SubLayout } from './components/SubLayout'
import ProfileLayout from './components/ProfileLayout'
import { Billpayment } from './components/wallet/Billpayment'
import TopUpWallet from './components/wallet/Billtopup'
import BuyAirtime from './components/wallet/BuyAirtime'
import AirtimeConfirmation from './components/wallet/AirtimeConfirmation'
import TopUpSuccess from './components/wallet/TopUpSuccess'
import PaymentSuccess from './components/wallet/PaymentSuccess'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <SubLayout>
        {/* <PaymentMethod /> */}
        {/* <ProfileLayout /> */}
        {/* <TopUpWallet /> */}
        {/* <BuyAirtime /> */}
        {/* <AirtimeConfirmation /> */}
        {/* <TopUpSuccess /> */}
        <PaymentSuccess />
      </SubLayout>

        {/* <Billpayment /> */}
    </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
