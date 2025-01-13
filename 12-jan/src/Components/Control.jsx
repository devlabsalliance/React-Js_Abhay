import { useState } from "react";
const Control = () => {
  let [number1, setNumber1] = useState();
  let [number2, setNumber2] = useState();
  let [result, setResult] = useState();

  let Add = () => {
    setResult(Number(number1) + Number(number2)); //Number()
  };
  let Sub = () => {
    setResult(number1 - number2);
  };
  let Mul = () => {
    setResult(number1 * number2);
  };
  let Divide = () => {
    setResult(number1 / number2);
  };
  let update1 = (number) => {
    setNumber1(number.target.value);
  };
  let update2 = (number) => {
    setNumber2(number.target.value); // target.value
  };
  return (
    <div className="control">
      <label htmlFor="">Enter the 1st number:</label>
      <input type="text" value={number1} onChange={update1} />
      <label htmlFor="">Enter the 2nd number:</label>
      <input type="text" value={number2} onChange={update2} />
      <br />
      <div className="kg-footer">
        <button className="kg" onClick={Add}>
          Add
        </button>
        <button className="kg" onClick={Sub}>
          Sub
        </button>
        <button className="kg" onClick={Mul}>
          Multiply
        </button>
        <button className="kg" onClick={Divide}>
          Divide
        </button>
      </div>
      <h1 className="result">{result}</h1>
    </div>
  );
};
export default Control;
