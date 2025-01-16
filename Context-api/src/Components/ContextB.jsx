import { useContext } from "react";
import { data } from "./ContextA";

const ContextB = () => {
  const { name } = useContext(data);
  return (
    <>
      <h1>I Got job {name}</h1>
    </>
  );
};
export default ContextB;
