import { useState } from 'react'
import './App.css'
import Form from './Components/Form';
import SpinWheel from './Components/Spinwheel';
import PolygonGenerator from './Components/DraftSpin';
function App() {
  

  return (
    <>
      <Form/>
      <PolygonGenerator/>
    </>
  )
}

export default App
