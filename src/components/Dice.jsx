/* eslint-disable react/prop-types */
export default function Dice(props) {
  return (
    <button className={`dice ${props.isHeld && "dice-held"}`}>
      {props.value}
    </button>
  );
}
