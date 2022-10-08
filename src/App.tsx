import "./App.css";
import { Counter } from "./components/state/Counter";
import { User } from "./components/state/User";

function App() {
  return (
    <div className="App">
      <User />
      <Counter />
    </div>
  );
}

export default App;
