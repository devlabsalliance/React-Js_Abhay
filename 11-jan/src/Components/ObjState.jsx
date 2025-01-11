import { useState } from "react";
const ObjState = () => {
  let [data, setData] = useState({ name: "abhay", mob: 7619 });
  let change = () => {
    setData({ name: "A.K Gupta", mob: 9304 });
  };
  return (
    <div>
      <h1>{data.name + "," + data.mob}</h1>
      <button type="button" onClick={change} className="btn btn-success">
        Change
      </button>
      {/* <button onClick={change}>Change</button> */}
    </div>
  );
};
export default ObjState;
