import React, { useState } from 'react';
import '../Styles/Spinwheel.css'; 
const SpinWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (!spinning) {
      const randomRotation = Math.floor(Math.random() * 360) + 720; 
      setRotation(randomRotation);
      setSpinning(true);

     
      setTimeout(() => {
        setSpinning(false);
      }, 1000);
    }
  };

  return (
    <div>
      <div
        className={`wheel ${spinning ? 'spinning' : ''}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        
      </div>
      <button onClick={handleSpin} disabled={spinning}>
        Spin to Win!
      </button>
    </div>
  );
};

export default SpinWheel;
