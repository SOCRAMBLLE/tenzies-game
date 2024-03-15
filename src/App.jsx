import { useState, useEffect } from "react";
import Dice from "./components/Dice";
import RollButton from "./components/RollButton";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Confetti from "react-confetti";

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

    if (tenzies) {
      setDiceArray(generateDiceArray());
      setTenzies(false);
    } else {
      setDiceArray((prev) =>
        prev.map((dice) => {
          return dice.isHeld === false
            ? { ...dice, value: randomDiceNumber() }
            : dice;
        })
      );
    }
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
      {tenzies && <Confetti />}
      <Header tenzies={tenzies} />
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
      <RollButton rollDice={rollDice} tenzies={tenzies} />
    </main>
  );
}

export default App;
