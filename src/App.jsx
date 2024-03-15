import { useState } from "react";
import Dice from "./components/Dice";
import RollButton from "./components/RollButton";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  const [diceArray, setDiceArray] = useState(generateDiceArray());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allIsHeld = diceArray.every((el) => el.isHeld);
    const allValueSame = diceArray.every(
      (el) => el.value === diceArray[0].value
    );
    if (allIsHeld && allValueSame) {
      setTenzies(true);
    }
  }, [diceArray]);

  useEffect(() => {
    tenzies && console.log("You won!!");
  }, [tenzies]);

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
    const randomDiceNumber = () => Math.floor(Math.random() * 6) + 1;
    setDiceArray((prev) =>
      prev.map((dice) => {
        return dice.isHeld === false
          ? { ...dice, value: randomDiceNumber() }
          : dice;
      })
    );
  }

  function holdDice(id) {
    setDiceArray((prev) =>
      prev.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }
  return (
    <main>
      <Header />
      <div className="dice-container">
        {diceArray.map((dice) => (
          <Dice
            isHeld={dice.isHeld}
            key={dice.id}
            value={dice.value}
            hold={() => holdDice(dice.id)}
          />
        ))}
      </div>
      <RollButton rollDice={rollDice} />
    </main>
  );
}

export default App;
