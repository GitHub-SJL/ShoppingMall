import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Item = ({ item }) => {
  let navigate = useNavigate();

  return (
    <Col>
      <img
        style={{cursor:"pointer"}}
        src={item.img}
        onClick={() => {
          navigate(`/detail/${item.id}`);
        }}
        width="80%"
        alt="sample"
      />
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      <span>{item.price}</span>
    </Col>
  );
};

export default Item;
