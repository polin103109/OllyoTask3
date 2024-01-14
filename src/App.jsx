import { useState } from 'react'
import './App.css'
import Form from './Components/Form';
import SpinWheel from './Components/Spinwheel';
import PolygonGenerator from './Components/DraftSpin';
function App() {
  const [polygonsData, setPolygonsData] = useState([]);
  return (
    <>
      <Form/> 
      <PolygonGenerator polygonsData={polygonsData} setPolygonsData={setPolygonsData}/>
    </>
  )
}

export default App
