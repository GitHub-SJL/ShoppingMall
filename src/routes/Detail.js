import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ items }) => {
  let { id } = useParams(null);

  const item = items.find((item) => item.id === Number(id));

  let YellowBtn = styled.button`
    background: yellow;
    color : black;
    padding : 10px;
  `
  let Box = styled.div`
    background: grey;
    padding : 20px;

  `

  return (
    <>
      {item ? (
        <div className="container">
          <YellowBtn>버튼</YellowBtn>
          <Box>박스</Box>
          <div className="row">
            <Figure>
              <Figure.Image
                width={400}
                height={190}
                alt="171x180"
                src={item.img}
              />
              <Figure.Caption>
                <p>{item.title}</p>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                <p>{item.content}</p>
                <span>{item.price}</span>
              </Figure.Caption>
            </Figure>
          </div>
          <Button variant="primary">주문하기</Button>
        </div>
      ) : (
        <div>상품이 없어요</div>
      )}
    </>
  );
};

export default Detail;
