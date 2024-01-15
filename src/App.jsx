import { useState } from 'react'
import './App.css'
import Form from './Components/Form';
import PolygonGenerator from './Components/DraftSpin';
function App() {
  const [polygonsData, setPolygonsData] = useState([
    { size: 260, color: 'red', text: 'Polygon 1' },
    { size: 260, color: 'blue', text: 'Polygon 2' },
    { size: 260, color: 'pink', text: 'Polygon 3' },
    { size: 260, color: 'green', text: 'Polygon 4' },
    { size: 260, color: 'yellow', text: 'Polygon 5' },
    { size: 260, color: 'magenta', text: 'Polygon 6' },
    { size: 260, color: 'grey', text: 'Polygon 7' },
    { size: 260, color: 'lightblue', text: 'Polygon 7' },
    { size: 260, color: 'white', text: 'Polygon 9' },
   
   
  ]);
  return (
    <>
      <PolygonGenerator polygonsData={polygonsData} setPolygonsData={setPolygonsData}/>
      <Form/> 
    </>
  )
}

export default App
