import React, { useState } from "react";
import styles from "./Calculator.module.css";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleEqual = () => {
    if (expression.trim() === "") {
      setResult("Error");
      return;
    }
    try {
      const evalResult = eval(expression);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleButton = (btn) => {
    if (btn === "C") handleClear();
    else if (btn === "=") handleEqual();
    else handleClick(btn);
  };

  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  return (
    <div className={styles.mainContainer}>
      <h1>React Calculator</h1>
      <input
        type="text"
        className={styles.display}
        value={expression}
        readOnly
      />
      <div className={styles.result}>{result}</div>
      <div className={styles.buttons}>
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleButton(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
