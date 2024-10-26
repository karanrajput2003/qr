import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QRCode from "react-qr-code";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0);
  const { eventid, userid } = useParams(); // Extracting URL parameters
  const qrValue = `Event Id:${eventid} And User Id:${userid}`;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600 mb-10">Sportify</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Scan the QR Code
        </h2>
        <QRCode value={qrValue} size={256} className="mx-auto" />
      </div>
    </div>
    </>
  )
}

export default App
