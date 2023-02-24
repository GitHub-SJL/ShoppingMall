import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Main from "./routes/Main.js";
import Header from "./components/NavBar";
import Detail from "./routes/Detail";
function App() {
  let [items, setItems] = useState(data);

  return (
    <div className="App">
      <Wrap>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Main items={items} setItems={setItems} />}
          />
          <Route path="/detail/:id" element={<Detail items={items} />} />
          <Route path="/event" element={<Event />}>
            <Route path="one" element={<div>첫 주문시 5만원 쿠폰</div>} />
            <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
          </Route>
          <Route path="*" element={<div>404페이지</div>} />
        </Routes>
      </Wrap>
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

const Wrap = styled.div`
  font-family: Noto-R, Dotum, sans-serif;
  font-size: 13px;
  line-height: 14.3px;
  text-decoration: none solid rgb(0, 0, 0);
  word-spacing: 0px;
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #000000;
  height: 5085px;
  width: 1435px;
  position: relative;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: block;
  transform: none;
  transition: all 0s ease 0s;
  outline: rgb(255, 0, 0) dashed 4px;
`;

export default App;
