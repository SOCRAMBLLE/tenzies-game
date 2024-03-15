import { useState } from "react";
import Dice from "./components/Dice";
import RollButton from "./components/RollButton";
import { nanoid } from "nanoid";

function App() {
  const [diceArray, setDiceArray] = useState(generateDiceArray());

  function generateDiceArray() {
    const randomDiceNumber = () => Math.floor(Math.random() * 6) + 1;
    const randomDiceArray = Array.from({ length: 10 }, () => ({
      value: randomDiceNumber(),
      isHeld: false,
      id: nanoid(),
    }));
    return randomDiceArray;
  }

  function rollDice() {
    setDiceArray(generateDiceArray());
  }
  console.log(diceArray);
  return (
    <main>
      <div className="dice-container">
        {diceArray.map((dice) => (
          <Dice isHeld={dice.isHeld} key={dice.id} value={dice.value} />
        ))}
      </div>
      <RollButton rollDice={rollDice} />
    </main>
  );
}

export default App;
