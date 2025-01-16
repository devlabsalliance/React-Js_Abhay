import { createContext } from "react";
import { useState } from "react";
import ContextB from "./ContextB";
import ContextC from "./ComponentC/ContextC";

// we are creating the context to send the value
const data = createContext();
const ContextA = () => {
  const [name, setName] = useState("....");

  // creating function to update our privious data insdie the [name]
  const update = () => {
    setName("Software Engineer Intern");
  };

  return (
    <>
      {/* we are passing the value inside both the components by using builtin method .Provider*/}
      <data.Provider value={{ name, update }}>
        <ContextB />
        <ContextC />
      </data.Provider>
    </>
  );
};
export default ContextA;
export { data };
