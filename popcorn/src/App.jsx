import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigationbar from './Components/Navigationbar'


function App() {
  
  const [inputValue, setInputValue] = useState('')

  return (
    
    <Navigationbar inputValue={inputValue} setInputValue={setInputValue} /> 
    
  )
}

export default App
