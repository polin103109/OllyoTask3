import React, { useState } from 'react';
//import '../Styles/Spinwheel.css'; 
const SpinWheel = () => {
    const segments = [
        "better luck next time",
        "70% OFF",
        "won 10",
        "Sorry!",
        "5% OFF",
        "won uber pass",
        "Not Today"
      ];
    
      const generateRandomColor = () => {
        
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
      const generateRandomSegments = () => {
       
        return segments.map((segment, index) => (
          <div key={index} className="number" style={{ backgroundColor: generateRandomColor() }}>
            {segment}
          </div>
        ));
      };
    const handleSpin = () => {
       alert("spinnnnnnn");
      };
    
      return (
        <div className='wheelContainer'>
          <button id="spin" onClick={handleSpin}>
            Spin
          </button>
          <div className="wheel">
          {generateRandomSegments()}
           
          </div>
        </div>
      )
};

export default SpinWheel;
