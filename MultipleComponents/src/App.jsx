import Appname from "./Components/Appname";
import "./App.css";
import Addeditems from "./Components/Addeditems";
import Additems from "./Components/Additems";
const App = () => {
  let a1 = { name: "Abhay", date: "2025-01-10" };
  let a2 = { name: "Kinshu", date: "2025-01-10" };
  let a3 = { name: "Ritick", date: "2025-01-10" };
  return (
    <center className="profile-container">
      <Appname />
      <Additems />
      <div className="item-container">
        <Addeditems userdetails={a1} />
        <Addeditems userdetails={a2} />
        <Addeditems userdetails={a3} />
      </div>
    </center>
  );
};

export default App;
