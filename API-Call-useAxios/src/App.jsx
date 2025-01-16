import "./App.css";
import Fetch1Api from "./Components/Fetch1Api";
function App() {
  return (
    <>
      <Fetch1Api url={"https://jsonplaceholder.typicode.com/users"} />
    </>
  );
}

export default App;
