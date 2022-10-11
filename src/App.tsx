import "./App.css";
import { CustomButton } from "./components/html/Button";
import { CustomInput } from "./components/html/input";

function App() {
  return (
    <div className="App">
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton>
      <CustomInput />
    </div>
  );
}

export default App;
