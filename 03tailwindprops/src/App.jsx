import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'
import './index.css'

function App() {

  return (
    <>
      <h1 className='bg-red-300 rounded-xl p-4'>Tailwind Test</h1>
      <Card username= "chaiaurcode" />
      <Card username= "divya" />
    </>
  )
}

export default App
