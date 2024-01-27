

import Visa from '../assets/images/visa.png';
import MasterCard from '../assets/images/master-card.svg';

const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  const cardStyle = {
    backgroundColor: bgColor,
    color,
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc', 
    margin: '10px',
    justifycontent: 'flex end',
  };

  const chipStyle = {
    width: '60px',
    margin: '0 0 10px 0',
  };

  const numberStyle = {
    fontSize: '1.5rem',
    marginBottom: '15px',
  };

  const expirationStyle = {
    fontSize: '1rem',
    marginBottom: '5px',
  };

  const bankStyle = {
    fontSize: '1rem',
    marginBottom: '15px',
  };

  const ownerStyle = {
    fontSize: '1rem',
  };

  return (
    <div className="credit-card" style={cardStyle}>
      <img src={type === 'Visa' ? Visa : MasterCard} alt={type} style={chipStyle} />
      <div style={numberStyle}>•••• •••• •••• {number.slice(-4)}</div>
      <div style={expirationStyle}>
        Expires {expirationMonth.toString().padStart(2, '0')}/{expirationYear.toString().slice(-2)}
      </div>
      <div style={bankStyle}>{bank}</div>
      <div style={ownerStyle}>{owner}</div>
    </div>
  );
};

export default CreditCard;



