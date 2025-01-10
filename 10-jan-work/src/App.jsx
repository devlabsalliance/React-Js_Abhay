import Addeditems from "./Components/Addeditems";
import Additems from "./Components/Additems";
import Appname from "./Components/Appname";
import "./App.css";
const App = () => {
  let arr = { name: "John Doe", date: "2025-01-10" };
  return (
    <center className="profile-container">
      <Appname />
      <Additems />
      <div className="item-container">
        <Addeditems props={arr} />
        <Addeditems props={arr} />
        <Addeditems props={arr} />
      </div>
    </center>
  );
};

export default App;
