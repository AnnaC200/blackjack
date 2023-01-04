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
  const [dealersCards, setDealersCards] = useState([]);
  const [playersCards, setPlayersCards] = useState([]);
  const [playersValue, setPlayersValue] = useState(0);
  const [dealersValue, setDealersValue] = useState(0);
  const [turn, setTurn] = useState(null)

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
    setDealersCards([newCards[0], newCards[1]]);
    setPlayersCards([newCards[2], newCards[3]]);
    setTurn("player")

    console.log("Dealers cards: " + newCards[0]);
    console.log("Players cards: " + newCards[2], newCards[3]);
    
  };

  const getValueOfHand = (cards) => {
    // loop over the given hand of cards and use substring to get the letter or number using substring
    const values = cards.map((card) => {
      const value = card.substring(0, card.length - 1);
      if (value === "A") {
        return 11;
      }
      if (value.match(/^[JQK]/)) {
        return 10;
      }
      return Number(value);
    });

    return values.reduce((a, c) => a + c, 0);
  };

  const handleGetValue = () => {
    const playersValue = getValueOfHand(playersCards);
    setPlayersValue(playersValue)
    console.log(playersCards);
    // this console displays the players value 
    console.log(playersValue);

    const dealersValue = getValueOfHand(dealersCards);
    setDealersValue(dealersValue)
    console.log(dealersCards);
    // this console displays the players value 
    console.log(dealersValue);

  };

  const handleStand = () => {
    setTurn("Dealer")
    
  }

  const handleHit = () => {
    const newCard = deckOfCards.splice(0, 1);
    setPlayersCards([...playersCards, newCard[0]]);
  }

  return (
    <div className="App">
      <h1>Blackjack</h1>
      <button onClick={shuffleCards}>Shuffle Cards</button>
      <button onClick={newGame}>Start</button>
      <button onClick={handleGetValue}>Get Value</button>
      <button onClick={handleStand}>Stand</button>
      <button onClick={handleHit}>Hit</button>

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
