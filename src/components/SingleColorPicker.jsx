import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div>
      <label htmlFor={`color-${color}`}>{`${color.toUpperCase()}: `}</label>
      <input
        id={`color-${color}`}
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        min="0"
        max="255"
      />
    </div>
  );
};

export default SingleColorPicker;
