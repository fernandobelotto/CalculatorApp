import { useState } from "react";

export const Calculator = () => {
  const [displayValue, setDisplayValue] = useState<any>("0");
  const [operator, setOperator] = useState<any>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<any>(false);
  const [memory, setMemory] = useState<any>(null);

  const inputNumber = (num: number) => {
    if (waitingForOperand) {
      setDisplayValue(num);
      setWaitingForOperand(false);
    } else {

      setDisplayValue(displayValue === "0" ? num : displayValue + num);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplayValue(".");
      setWaitingForOperand(false);
    } else if (displayValue.indexOf(".") === -1) {


      setDisplayValue(displayValue + ".");
    }
  };

  const inputOperator = (nextOperator: string) => {
    const nextValue = parseFloat(displayValue);
    if (operator && waitingForOperand) {
      setDisplayValue(String(performCalculation[operator](memory, nextValue)));
    } else {
      setMemory(nextValue);
      setOperator(nextOperator);
    }

    setWaitingForOperand(true);
  };

  const clearAll = () => {
    setDisplayValue("0");
    setOperator(null);
    setWaitingForOperand(false);
    setMemory(null);
  };

  const toggleSign = () => {
    const newValue = parseFloat(displayValue);
    if (newValue !== 0) {
      setDisplayValue(String(newValue * -1));
    }
  };

  const inputPercent = () => {
    const nextValue = parseFloat(displayValue);
    if (operator && waitingForOperand) {
      setDisplayValue(
        String(performCalculation[operator](memory, nextValue) / 100)
      );
    } else {


      setDisplayValue(String(nextValue / 100));
    }

    setWaitingForOperand(true);
  };

  const calculate = () => {
    const nextValue = parseFloat(displayValue);
    console.log(operator)

    if (operator && waitingForOperand) {
        console.log(performCalculation[operator](memory, nextValue))
      setDisplayValue(String(performCalculation[operator](memory, nextValue)));
    }

    setOperator(null);
    setMemory(null);

    setWaitingForOperand(true);
  };

 const performCalculation: any = {
    '/': (prevValue:number, nextValue: number) => prevValue / nextValue,
    '*': (prevValue:number, nextValue: number) => prevValue * nextValue,
    '+': (prevValue:number, nextValue: number) => prevValue + nextValue,
    '-': (prevValue:number, nextValue: number) => prevValue - nextValue,
    '=': (_prevValue:number, nextValue: number) => nextValue
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <button
        className="button clear"
        onClick={clearAll}
      >
        AC
      </button>
      <button
        className="button sign"
        onClick={toggleSign}
      >
        +/-
      </button>
      <button
        className="button percent"
        onClick={inputPercent}
      >
        %
      </button>
      <button
        className="button operator"
        onClick={() => inputOperator("/")}
      >
        /
      </button>
      <button
        className="button number"
        onClick={() => inputNumber(7)}
      >
        7
      </button>
      <button
        className="button number"
        onClick={() => inputNumber(8)}
      >
        8
      </button>
      <button
        className="button number"
        onClick={() => inputNumber(9)}
      >
        9
      </button>
      <button
        className="button operator"
        onClick={() => inputOperator("*")}
      >
        *
      </button>
      <button
        className="button number"
        onClick={() => inputNumber(4)}
      >
        4
      </button>
      <button
        className="button number"
        onClick={() => inputNumber(5)}
      >
        5
      </button>
      <button
        className="button number"
        onClick={() => inputNumber(6)}
      >
        6
      </button>
      <button
        className="button operator"
        onClick={() => inputOperator("-")}
      >
        -
      </button>
      <button
        className="button number"
        onClick={() => inputNumber(1)}
      >
        1
      </button>
      <button
        className="button number"
        onClick={() => inputNumber(2)}
      >
        2
      </button>
      <button
        className="button number"
        onClick={() => inputNumber(3)}
      >
        3
      </button>
      <button
        className="button operator"
        onClick={() => inputOperator("+")}
      >
        +
      </button>
      <button
        className="button number zero"
        onClick={() => inputNumber(0)}
      >
        0
      </button>
      <button
        className="button dot"
        onClick={inputDot}
      >
        .
      </button>
      <button
        className="button equal"
        onClick={calculate}
      >
        =
      </button>
    </div>
  );
};
