/* eslint-disable react/prop-types */
export default function Header(props) {
  return (
    <header>
      <h1 className="title">{props.tenzies ? "YOU WON!" : "Tenzies"}</h1>
      <p className="instructions">
        {props.tenzies
          ? `Well played! Click on "New Game" to start a new game.`
          : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
      </p>
    </header>
  );
}
