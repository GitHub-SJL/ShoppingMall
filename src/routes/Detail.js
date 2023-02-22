import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import { useParams } from "react-router-dom";

const Detail = ({ items }) => {
  let { id } = useParams(null);

  const item = items.find((item) => item.id === Number(id));

  return (
    <>
      {item ? (
        <div className="container">
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
