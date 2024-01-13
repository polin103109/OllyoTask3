import React, { useState, useEffect } from 'react';
import "../Styles/Draft.css"

const PolygonGenerator = () => {
  const [inputSize, setInputSize] = useState(200);
  const [numPolygons, setNumPolygons] = useState(2);
  const [polygonColor, setPolygonColor] = useState('lightblue');
  const [polygonText, setPolygonText] = useState('');

  const handleInputChange = (e) => {
    setInputSize(parseInt(e.target.value, 10) || 0);
  };

  const handleColorChange = (e) => {
    setPolygonColor(e.target.value);
  };

  const handleTextChange = (e) => {
    setPolygonText(e.target.value);
  };

  useEffect(() => {
    setNumPolygons(6);
  }, [inputSize]);

  const calculatePolygonPosition = (index) => {
    const angle = (360 / numPolygons) * index;
    const radius = 100;

    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);

    return { x, y };
  };

  const polygons = Array.from({ length: numPolygons }).map((_, index) => {
    const { x, y } = calculatePolygonPosition(index);

    const polygonStyles = {
      float: 'left',
      width: `${inputSize}px`,
      height: `${inputSize}px`,
       margin: ' 20px',
      position:'absolute',
    //   shapeOutside: `polygon(
    //     0 0,
    //     100% 0,
    //     100% 20%,
    //     60% 20%,
    //     60% 100%,
    //     40% 100%,
    //     40% 20%,
    //     0 20%
    //   )`,
      clipPath: `polygon(
       0 0,
       56% 0,
       100% 100%,
       0 56%
      )`,
      background: polygonColor,
      transformOrigin: 'bottom right',
      transform: `translate(${x}px, ${y}px) rotate(45deg)`,
    }

    return (
      <div key={index} style={polygonStyles}>
        <p>{polygonText}</p>
      </div>
    );
  });

  return (
    <div>
        <div>
      <label htmlFor="inputSize">Enter size:</label>
      <input
        type="number"
        id="inputSize"
        value={inputSize}
        onChange={handleInputChange}
      />

      <label htmlFor="polygonColor">Enter color:</label>
      <input
        type="text"
        id="polygonColor"
        value={polygonColor}
        onChange={handleColorChange}
      />

      <label htmlFor="polygonText">Enter text:</label>
      <input
        type="text"
        id="polygonText"
        value={polygonText}
        onChange={handleTextChange}
      />
      </div>
      <div className='wheelCircleContainer'>
      <div className='wheelCircle' >{polygons}</div>
      </div>
    </div>
  );
};

export default PolygonGenerator;
