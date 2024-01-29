import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
    switch (color) {
      case 'r':
        setRValue(value);
        break;
      case 'g':
        setGValue(value);
        break;
      case 'b':
        setBValue(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
        }}
      ></div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(value) => handleColorChange('r', value)}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(value) => handleColorChange('g', value)}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(value) => handleColorChange('b', value)}
      />
    </div>
  );
};

export default RGBColorPicker;
