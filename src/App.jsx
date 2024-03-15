import { useState } from "react";
import Dice from "./components/Dice";
import RollButton from "./components/RollButton";

function App() {
  const [diceArray, setDiceArray] = useState(generateDiceArray());

  function generateDiceArray() {
    const randomDiceNumber = () => Math.floor(Math.random() * 6) + 1;
    const randomDiceArray = Array.from({ length: 10 }, () =>
      randomDiceNumber()
    );
    return randomDiceArray;
  }

  function rollDice() {
    setDiceArray(generateDiceArray());
  }

  return (
    <main>
      <div className="dice-container">
        {diceArray.map((dice, index) => (
          <Dice key={index} value={dice} />
        ))}
      </div>
      <RollButton rollDice={rollDice} />
    </main>
  );
}

export default App;
