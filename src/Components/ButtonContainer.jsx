import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ handleButtonClick }) => {
  const buttons = [
    "%",
    "CE",
    "C",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div className={styles.buttonContainer}>
        {buttons.map((item) => (
          <button
            key={item}
            className={styles.buttons}
            onClick={() => handleButtonClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
