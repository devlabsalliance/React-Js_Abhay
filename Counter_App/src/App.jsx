import "./App.css";
import StrState from "./Components/StrState";
import ArrayState from "./Components/ArrayState";
import ObjState from "./Components/ObjState";
import Counter from "./Components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <center className="AppComp">
        <StrState />
        <ObjState />
        <ArrayState />
        <Counter />
      </center>
    </>
  );
}

export default App;
