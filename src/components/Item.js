
import { Col } from "react-bootstrap";

const Item = ({ item, setId}) => {
 
    return (
      <Col>
        <img onClick={()=>{
          setId(item.id)
        }} src={item.img} width="80%" alt="sample" />
        <h4>{item.title}</h4>
        <p>{item.content}</p>
        <span>{item.price}</span>
      </Col>
    );
  };


export default Item;