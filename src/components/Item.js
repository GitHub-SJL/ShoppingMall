import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Item = ({ item }) => {
  let navigate = useNavigate();

  return (
    <Col>
      <img
        style={{ cursor: "pointer" }}
        src={item.imageUrl}
        onClick={() => {
          navigate(`/detail/${item._id}`);
        }}
        width="80%"
        alt="sample"
      />
      <h4>{item.title}</h4>
      <p>{item.shortDescription}</p>
      <span>{item.price}</span>
    </Col>
  );
};

export default Item;
