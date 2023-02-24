import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Item from "../components/Item.js";
import Slider from "../components/Slider";
const Main = ({ items, setItems }) => {
  const [itemNum, setItemNum] = useState(5);
  useEffect(() => {
    axios
      .get("http://localhost:8001/api/products")
      .then((data) => {
        setItems(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Slider />
      <Products>
        <H2>SEVEN 고객님을 위한 추천상품 </H2>
        <div>
          <span>신상</span>
          <span>인기</span>
          <span>상의</span>
          <span>팬츠</span>
        </div>
        <Row>
          {items.map((item, idx) => {
            console.log(itemNum);
            if (idx < itemNum) {
              return (
                <Col className="item">
                  <Item item={item} />
                </Col>
              );
            }
          })}
        </Row>
        {itemNum > items.length ? <div>더 이상 상품이 없습니다.</div> : null}
        <button
          onClick={() => {
            setItemNum(itemNum + 5);
          }}
        >
          상품 더보기
        </button>
      </Products>
      <Footer></Footer>
      <ShopInfo></ShopInfo>
    </>
  );
};

const Products = styled.div`
  font-family: Noto-R, Dotum, sans-serif;
  font-size: 13px;
  line-height: 14.3px;
  text-decoration: none solid rgb(0, 0, 0);
  word-spacing: 0px;
  width: 100%;
  height: 54.5%;
  border: 1px dotted red;
  padding: 60px 0 88px 0;
`;

const H2 = styled.h2`
  font-family: Noto-R, Dotum, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 35.2px;
  text-decoration: none solid rgb(1, 1, 1);
  word-spacing: 0px;
  margin-bottom: 50px;
`;

const Footer = styled.div`
  width: 100%;
  height: 12%;
  border: 1px dotted red;
`;

const ShopInfo = styled.div`
  width: 100%;
  height: 9%;
  border: 1px dotted red;
`;

export default Main;
