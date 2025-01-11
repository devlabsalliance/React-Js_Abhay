import { useState } from "react";
import str from "./StrState.module.css";
const StrState = () => {
  let [data, setData] = useState("Abhay");
  let change = () => {
    setData("Kinshu");
  };
  return (
    <div>
      <h1 style={str}>{data}</h1>
      <button type="button" onClick={change} className="btn btn-success ">
        Change
      </button>
      {/* <button onClick={change}>Change</button> */}
    </div>
  );
};
export default StrState;
