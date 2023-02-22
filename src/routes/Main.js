import { Row, Container } from "react-bootstrap";
import Item from "../components/Item.js";
const Main = ({ items }) => {
  return (
    <>
      <div className="main-bg"></div>
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
