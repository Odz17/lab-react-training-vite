import React, { useState } from 'react';
import emptyDiceImage from '../assets/images/dice-empty.png';
import dice1Image from '../assets/images/dice1.png';
import dice2Image from '../assets/images/dice2.png';
import dice3Image from '../assets/images/dice3.png';
import dice4Image from '../assets/images/dice4.png';
import dice5Image from '../assets/images/dice5.png';
import dice6Image from '../assets/images/dice6.png';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(null);

  const rollDice = () => {
    setDiceValue(null); 
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue); 
    }, 1000);
  };

  const getDiceImage = () => {
    if (diceValue === null) {
      return emptyDiceImage;
    } else {
      
      switch (diceValue) {
        case 1:
          return dice1Image;
        case 2:
          return dice2Image;
        case 3:
          return dice3Image;
        case 4:
          return dice4Image;
        case 5:
          return dice5Image;
        case 6:
          return dice6Image;
        default:
          return emptyDiceImage;
      }
    }
  };

  

  return (
    <img
    className='dice'
      src={getDiceImage()}
      alt={`Dice ${diceValue}`}
      onClick={rollDice}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Dice;
