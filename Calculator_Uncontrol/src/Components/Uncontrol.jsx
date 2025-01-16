import { useState, useRef } from "react";
const Uncontrol = () => {
  let number1 = useRef();
  let number2 = useRef();

  let [result, setResult] = useState(0);

  const Add = () => {
    let a = Number(number1.current.value);
    let b = Number(number2.current.value);
    setResult(a + b);
  };
  const Sub = () => {
    let a = Number(number1.current.value);
    let b = Number(number2.current.value);
    setResult(a - b);
  };
  return (
    <>
      <label htmlFor="">Enter the 1st number:</label>;
      <input type="text" ref={number1} />
      <label htmlFor="">Enter the 2nd number:</label>;
      <input type="text" ref={number2} />
      <button onClick={Add}>Add</button>
      <button onClick={Sub}>Sub</button>
      <h1>{result}</h1>
    </>
  );
};
export default Uncontrol;
