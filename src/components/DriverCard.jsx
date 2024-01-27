
const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
  const stars = Math.round(rating); // Round the rating to the nearest integer

  return (
    <div className="driver-card">
      <img src={img} alt={`${name}'s avatar`} className="driver-avatar" />
      <div className="driver-info">
        <h3>{name}</h3>
        <div className="driver-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < stars ? 'filled' : 'empty'}>
              ★
            </span>
          ))}
        </div>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
