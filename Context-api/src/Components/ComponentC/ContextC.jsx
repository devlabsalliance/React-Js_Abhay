import { useContext } from "react";
import { data } from "../ContextA";

const ContextC = () => {
  const { name, update } = useContext(data);

  return (
    <>
      <h1>I am working as {name}</h1>
      <button onClick={update}> Click</button>
    </>
  );
};
export default ContextC;
