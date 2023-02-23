import { Row, Container, Carousel } from "react-bootstrap";

import Item from "../components/Item.js";
import Slider from "../components/Slider";
const Main = ({ items }) => {
  return (
    <>
      <Slider />
      <Container>
        <Row>
          {items.map((item, idx) => {
            return <Item item={item} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default Main;
