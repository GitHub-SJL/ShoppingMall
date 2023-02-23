import "./App.css";

import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Main from "./routes/Main.js";
import NavBar from "./components/NavBar";
import Detail from "./routes/Detail";
function App() {
  let [items, setItems] = useState(data);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Main items={items} />} />
        <Route path="/detail/:id" element={<Detail items={items} />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 5만원 쿠폰</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>404페이지</div>} />
      </Routes>
    </div>
  );
}

const Event = () => {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
