// import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/developers/Developer";

function App() {
  const objDevs = [
    { name: "Túlio", age: 19, country: "Brasil" },
    { name: "Lucas", age: 24, country: "Brasil" },
    { name: "Joe", age: 22, country: "Estados Unidos" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Cards pessoa={objDevs[0]} />
        <Cards pessoa={objDevs[1]} />
        <Cards pessoa={objDevs[2]} />
      </header>
    </div>
  );
}

export default App;
