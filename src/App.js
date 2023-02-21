import "./App.css";

import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./routes/Main.js";
import NavBar from "./components/NavBar";
import Detail from "./routes/Detail";
function App() {
  let [items, setItems] = useState(data);
  let [id, setId] = useState(0);
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Main setId={setId} items={items} />} />
        <Route path="/detail" element={<Detail id={id} items={items} />} />
      </Routes>
    </div>
  );
}

export default App;
