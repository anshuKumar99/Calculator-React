import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  const onButtonClick = (buttonValue) => {
    if (buttonValue === "=") {
      const result = eval(displayValue);
      setDisplayValue(result);
    } else if (buttonValue === "C" || buttonValue === "CE") {
      setDisplayValue("");
    } else {
      const newDisplayValue = displayValue + buttonValue;
      setDisplayValue(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <h3 className={styles.heading}>CALCULATOR</h3>
        <Display displayValue={displayValue} />
        <ButtonContainer handleButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
