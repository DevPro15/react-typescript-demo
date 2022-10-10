import "./App.css";
import { List } from "./components/generics/List";

function App() {
  return (
    <div className="App">
      {/* <List
        items={["Zaheer Wonder Women", "Jasim Supergirl", "Zair Deadpool"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: "jasim",
            last: "Supergirl",
          },
          {
            id: 2,
            first: "Zaheer",
            last: "Wonder Women",
          },
          {
            id: 3,
            first: "Zair",
            last: "Deadpool",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
