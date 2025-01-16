import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(id);
      console.log("cleanup");
    };
  }, []);

  return (
    <>
      <div>Count: {count}</div>
    </>
  );
}

export default App;
