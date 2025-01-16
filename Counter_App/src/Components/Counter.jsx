import { useState } from "react";

const Counter = () => {
  let [data, setData] = useState(0);
  let increment = () => {
    setData(data + 1);
  };
  let decrement = () => {
    setData(data - 1);
  };
  let reset = () => {
    setData(0);
  };
  return (
    <div>
      <h1>{data}</h1>
      <button type="button" onClick={increment} className="btn btn-success">
        Increment
      </button>
      <button type="button" onClick={decrement} className="btn btn-success">
        Decrement
      </button>
      <button type="button" onClick={reset} className="btn btn-success">
        Reset
      </button>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  );
};
export default Counter;
