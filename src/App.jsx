import { useState } from "react";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
