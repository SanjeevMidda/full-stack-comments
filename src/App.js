import { useState } from "react";
import "./index.css";

function App() {
  const [input, setInput] = useState(" ");

  return (
    <div className="App">
      <div className="inputContainer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <h3>></h3>
      </div>
    </div>
  );
}

export default App;
