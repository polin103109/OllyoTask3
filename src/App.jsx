import { useState } from 'react'
import './App.css'
import Form from './Components/Form';
import SpinWheel from './Components/Spinwheel';
import PolygonGenerator from './Components/DraftSpin';
function App() {
  const [polygonsData, setPolygonsData] = useState([
    { size: 300, color: 'red', text: 'Polygon 1' },
    { size: 300, color: 'blue', text: 'Polygon 2' },
    { size: 300, color: 'pink', text: 'Polygon 3' },
    { size: 300, color: 'green', text: 'Polygon 4' },
    { size: 300, color: 'yellow', text: 'Polygon 5' },
    { size: 300, color: 'magenta', text: 'Polygon 6' },
    { size: 300, color: 'grey', text: 'Polygon 7' },
    { size: 300, color: 'lightblue', text: 'Polygon 7' },
    { size: 300, color: 'white', text: 'Polygon 9' },
    { size: 300, color: 'orange', text: 'Polygon 10' },
   
  ]);
  return (
    <>
      <PolygonGenerator polygonsData={polygonsData} setPolygonsData={setPolygonsData}/>
      <Form/> 
    </>
  )
}

export default App
