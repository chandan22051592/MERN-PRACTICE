import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'


function App() {

  return (
    <>
      <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} />
    </>
  )
}

export default App
