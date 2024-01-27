const Random = ({ min, max }) => {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random">
      <p>Random Value: {randomValue}</p>
    </div>
  );
};

export default Random;
