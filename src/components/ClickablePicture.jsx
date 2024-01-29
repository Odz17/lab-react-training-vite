import React, { useState } from 'react';
import IronhackImage from '../assets/images/Ironhack.png';
import Glasses from '../assets/images/glasses.png';

const ClickablePicture = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [eyesPosition, setEyesPosition] = useState({ x: 110, y: 90 });

  const handleImageClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setEyesPosition({ x: offsetX, y: offsetY });
    setIsClicked(!isClicked);
  };

  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const glassesStyle = {
    position: 'absolute',
    top: eyesPosition.y - 90 + 'px', 
    left: eyesPosition.x - 110 + 'px', 
    width: '250px', 
    height: 'auto',
    pointerEvents: 'none',
  };

  return (
    <div style={containerStyle}>
      <img
        src={IronhackImage}
        alt="Clickable Picture"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      />
      {isClicked && <img src={Glasses} alt="Glasses" style={glassesStyle} />}
    </div>
  );
};

export default ClickablePicture;
