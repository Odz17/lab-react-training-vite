
const BoxColor = ({ r, g, b }) => {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  const textColor = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? 'black' : 'white';

  const boxStyle = {
    backgroundColor,
    color: textColor,
    padding: '20px',
    margin: '10px',
    border: '1px solid black',
  };

  return (
    <div className="box-color" style={boxStyle}>
      <p>RGB: {r}, {g}, {b}</p>
    </div>
  );
};

export default BoxColor;
