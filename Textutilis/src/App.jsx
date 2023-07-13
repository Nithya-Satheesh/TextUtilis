import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

function App() {

  return (
    <>
<Navbar title = 'TextUtils'/>
<div className="container my-3 ">
<TextForm heading ='Enter the text to analyse below'/>
</div>

    </>
  )
}

export default App
