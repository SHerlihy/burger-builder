import { useState } from "react";
import Navbar from "./Components/Navbar";
import Builder from "./Screens/Builder";

function App() {
  const [buying, setBuying] = useState(false);

  const toggleBuying = () => {
    setBuying((prev) => !prev);
  };
  return (
    <div className="App">
      <Navbar overlay={toggleBuying} />
      <Builder overlay={toggleBuying} buying={buying} />
    </div>
  );
}

export default App;
