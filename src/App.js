import React from "react";
import { useState } from "react";

const deckOfCards = [
  "AH",
  "2H",
  "3H",
  "4H",
  "5H",
  "6H",
  "7H",
  "8H",
  "9H",
  "10H",
  "JH",
  "QH",
  "KH",
  "AC",
  "2C",
  "3C",
  "4C",
  "5C",
  "6C",
  "7C",
  "8C",
  "9C",
  "10C",
  "JC",
  "QC",
  "KC",
  "AD",
  "2D",
  "3D",
  "4D",
  "5D",
  "6D",
  "7D",
  "8D",
  "9D",
  "10D",
  "JD",
  "QD",
  "KD",
  "AS",
  "2S",
  "3S",
  "4S",
  "5S",
  "6S",
  "7S",
  "8S",
  "9S",
  "10S",
  "JS",
  "QS",
  "KS",
];

const App = () => {
  const [dealersCards, setDealersCards] = useState(0);
  const [playersCards, setPlayersCards] = useState(0);
 

  const shuffleCards = () => {
    for (let i = 0; i < deckOfCards.length; i++) {
      let j = Math.floor(Math.random() * deckOfCards.length);
      let temp = deckOfCards[i];
      deckOfCards[i] = deckOfCards[j];
      deckOfCards[j] = temp;
    }

    console.log(deckOfCards);
  };

  const newGame = () => {

    const newCards = deckOfCards.splice(0, 4);
    setDealersCards([newCards[0], newCards[2]]);

    const getValue = () => {
      let data = newCards.split()
      let value = data[0];

      if(isNaN(value)) {
        if (value === "A") {
          return 11;
        }
        return 10;
      }
    
    }
    

    setPlayersCards([newCards[1], newCards[3]]);

    console.log(dealersCards, playersCards);
  };

 



 



  return (
    <div className="App">
      <h1>Blackjack</h1>
      <button onClick={shuffleCards}>Shuffle Cards</button>
      <button onClick={newGame}>Start</button>
    

      <div className="card-grid">
        <div>
          <img
            className="back"
            src="/cards/BACK.png"
            width={125}
            height={170}
            alt="card back"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
