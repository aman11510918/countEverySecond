import "./App.css";
import ClassTimer from "./components/ClassTimer/ClassTimer";
import FunctionTimer from "./components/FunctionTimer/FunctionTimer";

function App() {
  return (
    <div className="App">
      <FunctionTimer />
      <span />
      <hr
        style={{
          marginTop: "70px",
          marginBottom: "60px",
        }}
      />
      <ClassTimer />
    </div>
  );
}

export default App;
