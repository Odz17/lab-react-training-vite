
const Rating = ({ children }) => {
  const ratingValue = Math.round(children); 
  const maxStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <span key={i} className={i <= ratingValue ? 'filled' : 'empty'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="rating">
      {renderStars()}
    </div>
  );
};

export default Rating;
