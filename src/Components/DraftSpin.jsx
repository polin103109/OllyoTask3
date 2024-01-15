import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import "../Styles/Draft.css";
import MyTable from "./Usertable";

const PolygonGenerator = ({ polygonsData, setPolygonsData }) => {
  const [inputSize, setInputSize] = useState("");
  const [polygonColor, setPolygonColor] = useState("");
  const [polygonText, setPolygonText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rotationValue, setRotationValue] = useState(
    Math.ceil(Math.random() * 3600)
  );
  const addtoSpinWheel = () => {
    const newPolygon = {
      size: inputSize,
      color: polygonColor,
      text: polygonText,
    };
    setPolygonsData([...polygonsData, newPolygon]);
    setIsModalOpen(false);
  };
 const handleSegments = ()=>{
  setIsModalOpen(true);
 }

  const handleInputChange = (e) => {
    setInputSize(parseInt(e.target.value, 10) || 0);
  };

  const handleColorChange = (e) => {
    setPolygonColor(e.target.value);
  };

  const handleTextChange = (e) => {
    setPolygonText(e.target.value);
  };

  //   useEffect(() => {
  //     setNumPolygons(5);
  //   }, [inputSize]);

  //   const calculatePolygonPosition = (index) => {
  //     const angle = (360 / numPolygons) * index;
  //     const radius = 1000;

  //     const x = radius * Math.cos((angle * Math.PI) / 180);
  //     const y = radius * Math.sin((angle * Math.PI) / 180);

  //     return { x, y };
  //   };

  const polygons = polygonsData.map((polygon, index) => {
    // const { x, y } = calculatePolygonPosition(index);

    const polygonStyles = {
      //float: 'left',
      "--i": index,
      width: `${polygon.size}px`,
      height: `${polygon.size}px`,
      position: "absolute",
      clipPath: `polygon(
       0 0,
       56% 0,
       100% 100%,
       0 56%
      )`,
      background: polygon.color,
      transformOrigin: "bottom right",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: `rotate(${36 * index}deg)`,
    };

    return (
      <div key={index} style={polygonStyles}>
        <p>
          <span>{polygon.text}</span>
        </p>
      </div>
    );
  });
  const playSpin = () => {
    const newValue = rotationValue + Math.ceil(Math.random() * 3600);
    setRotationValue(newValue);
  };

  return (
    <div className="spinFormContainer">
      <div className="inputDiv">
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div>
            <label htmlFor="inputSize">Enter size:</label>
            <input
              type="number"
              id="inputSize"
              value={inputSize}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="polygonColor">Enter color:</label>
            <input
              type="text"
              id="polygonColor"
              value={polygonColor}
              onChange={handleColorChange}
            />
          </div>
          <div>
            <label htmlFor="polygonText">Enter text:</label>
            <input
              type="text"
              id="polygonText"
              value={polygonText}
              onChange={handleTextChange}
            />
          </div>
          <div className="modalbottom"></div>
          <button className="modalbutton" onClick={addtoSpinWheel}>
            ADD
          </button>
        </Modal>
      </div>
      <div className="wheelCircleContainer">
        <button className="segmentbutton" onClick={handleSegments}>Modify Segments</button>
        <button className="spinButton" onClick={playSpin}>
          Spin to Win!
        </button>
        <div
          className="wheelCircle"
          style={{ transform: `rotate(${rotationValue}deg)` }}
        >
          {polygons}
        </div>
        <div className="indicator">
          <FontAwesomeIcon className="arrowicon" icon={faArrowAltCircleDown} />
        </div>
      </div>
  <MyTable/>
    </div>
  );
};

export default PolygonGenerator;
