import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Nav from "react-bootstrap/Nav";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CountInput = styled.input`
  ::placeholder {
    color: black;
  }
`;

const Box = styled.div`
  background: grey;
  padding: 20px;
`;

const Detail = ({ items }) => {
  let { id } = useParams(null);
  let [alert, setAlert] = useState(false);
  const [tap, setTap] = useState(0);
  const [count, setCount] = useState(0);
  const item = items.find((item) => item._id === id);

  useEffect(() => {
    setTimeout(() => {
      setAlert(true);
    }, 2000);
  }, []);

  return (
    <>
      {item ? (
        <div className="container">
          {!alert ? <Box>박스</Box> : null}
          <div className="row">
            <Figure>
              <Figure.Image
                width={400}
                height={190}
                alt="171x180"
                src={item.imageUrl}
              />
              <Figure.Caption>
                {isNaN(count) ? (
                  <p style={{ color: "red" }}>숫자를 입력해주세요.</p>
                ) : null}
                <CountInput
                  placeholder="수량 입력란"
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                  value={count}
                />
                <p>{item.title}</p>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                <p>{item.shortDescription}</p>
                <span>{item.price}</span>
              </Figure.Caption>
            </Figure>
          </div>
          <Button variant="primary">주문하기</Button>
        </div>
      ) : (
        <div>상품이 없어요</div>
      )}
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(0);
            }}
            eventKey="link-0"
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(1);
            }}
            eventKey="link-1"
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(2);
            }}
            eventKey="link-2"
          >
            더보기
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TapContent tap={tap}></TapContent>
    </>
  );
};

const TapContent = ({ tap }) => {
  if (tap === 0) {
    return <div>내용0</div>;
  } else if (tap === 1) {
    return <div>내용1</div>;
  } else if (tap === 2) {
    return <div>내용2</div>;
  }
};

export default Detail;
