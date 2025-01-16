import { useState } from "react";
const Form = () => {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [mobile, setMobile] = useState();
  let [result, setResult] = useState();

  const Result = () => {
    setResult(name + " " + email + " " + mobile);
  };
  let upName = (name) => {
    setName(name.target.value);
  };
  let upEmail = (email) => {
    setEmail(email.target.value);
  };
  let upMobile = (mob) => {
    setMobile(mob.target.value);
  };
  return (
    <>
      <label htmlFor="">Enter the Name :</label>
      <input
        type="text"
        value={name}
        onChange={upName}
        placeholder="Type name...."
      />
      <label htmlFor="email">Enter the Email :</label>
      <input
        type="email"
        name={email}
        onChange={upEmail}
        placeholder="Type email...."
      />
      <label htmlFor="">Enter the Mob :</label>
      <input type="number" onChange={upMobile} placeholder="Type number..." />
      <button onClick={Result}> Submit </button>
      <h1>{result}</h1>
    </>
  );
};
export default Form;
