import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5

  const increaseValue = () => {
    if(counter == 20) return
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
  }

  const decreaseValue = () => {
    if(counter == 0) return
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Hello from React {counter}</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={increaseValue}>Increase value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
