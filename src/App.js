import "./App.css";
import ClassTimer from "./components/ClassTimer/ClassTimer";
import CountSecond from "./components/CountSecond/CountSecond";
import FunctionTimer from "./components/FunctionTimer/FunctionTimer";

function App() {
  return (
    <div className="App">
      <FunctionTimer />
      <span />
      <hr />
      <ClassTimer />
      <hr />
      <CountSecond />
    </div>
  );
}

export default App;
