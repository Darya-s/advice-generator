import "./index.css";
import DICE from "./images/icon-dice.svg";

const Button = ({ onClick, isDisabled }) => {
  return (
    <button
      className={isDisabled ? "rotate" : " "}
      disabled={isDisabled}
      onClick={onClick}
    >
      <img alt="dice" src={DICE} />
    </button>
  );
};

export default Button;
