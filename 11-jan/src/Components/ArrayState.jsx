import { useState } from "react";
const ArrayState = () => {
  let [data, setData] = useState(["Dark", "Sun", "Morning"]);
  let change = () => {
    setData(["Light", "Moon", "Evening"]);
  };
  return (
    <div>
      <h1>{data[0]}</h1>
      <h1>{data[1]}</h1>
      <h1>{data[2]}</h1>
      <button type="button" onClick={change} className="btn btn-success">
        Change
      </button>
      {/* <button onClick={change}>Change</button> */}
    </div>
  );
};
export default ArrayState;
