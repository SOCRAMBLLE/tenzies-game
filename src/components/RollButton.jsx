/* eslint-disable react/prop-types */
export default function RollButton(props) {
  return (
    <button className="roll-btn" onClick={props.rollDice}>
      {props.tenzies ? "New Game" : "Roll"}
    </button>
  );
}
