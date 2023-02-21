import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure";
const Detail = ({ items, id }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Figure>
            <Figure.Image
              width={400}
              height={190}
              alt="171x180"
              src={items[id].img}
            />
            <Figure.Caption>
              <p>상품명</p>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
              <p>상품설명</p>
              <span>120000원</span>
            </Figure.Caption>
          </Figure>
        </div>
        <Button variant="primary">주문하기</Button>
      </div>
    </>
  );
};

export default Detail;
