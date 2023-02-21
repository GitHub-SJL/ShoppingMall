
import {Row, Container } from "react-bootstrap";
import Item from "../components/Item.js";
const Main = ({items, setId}) =>{

    return (
        <>
          <div className="main-bg"></div>
      <Container>
        <Row>
          {items.map((item, idx) => {
            return <Item setId={setId} item={item} />;
          })}
        </Row>
      </Container>
        </>
    )

}


export default Main