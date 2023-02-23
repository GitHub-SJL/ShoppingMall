import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import slide_img0 from "../img/bg/slide_img0.jpg";
import slide_img1 from "../img/bg/slide_img1.jpg";
import slide_img2 from "../img/bg/slide_img2.jpg";
import slide_img3 from "../img/bg/slide_img3.jpg";
import slide_img4 from "../img/bg/slide_img4.jpg";
import slide_img5 from "../img/bg/slide_img5.jpg";
import slide_img6 from "../img/bg/slide_img6.jpg";
import slide_img7 from "../img/bg/slide_img7.jpg";
import slide_img8 from "../img/bg/slide_img8.jpg";

import btn_slide_next from "../img/btn/btn_slide_next.png";
import btn_slide_prev from "../img/btn/btn_slide_prev.png";

const Wrapper = styled.div`
  margin: 22px 0px;
  display: flex;
  overflow-x: hidden;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 7px;
  display: flex;
  align-items: center;
  margin: 0 40px;
  cursor: pointer;
  position: relative;
`;

const Row = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

const Img = styled.img`
  border-radius: 7px;
  margin: 0;
  margin: 0 12.5px;
  position: relative;
  cursor: pointer;
  transition: all 0.5s linear;
`;
const PrivewImg = styled.img`
  transition: all 1s linear;
  border-radius: 7px;
`;

const Button = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: absolute;
  justify-content: center;
  border: none;
  font-size: 12px;
  height: 50px;
  border-radius: 60px;
  right: 83%;
  left: 81%;
  padding: 25px 10px;
  opacity: 0.5;
  z-index: 2;
  background: none;
`;

const LeftButton = styled(Button)`
  transition: all 0.5s ease-in-out;
`;

const RightButton = styled(Button)`
  transition: all 0.5s ease-in-out;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const WantedImg = [
  slide_img0,
  slide_img1,
  slide_img2,
  slide_img3,
  slide_img4,
  slide_img5,
  slide_img6,
  slide_img7,
  slide_img8,
];

function Slider() {
  //슬라이드
  const slideRef = useRef(null);
  const [index, setIndex] = useState(0); // 인덱스를 만들어줍니다.
  const [isSlide, setIsSlide] = useState(false); // 슬라이드 중인지 체크해줍니다. 슬라이드 중에 여러번 빠르게 클릭 못하게 하는 역할
  const [x, setX] = useState(0); // css에서 슬라이드 애니메이션 효과를 주기위해 x만큼 이동시키는 역할입니다.

  //드래그로 슬라이드 넘기기
  const [isClick, setIsClick] = useState(false); // 드래그를 시작하는지 체크해줍니다.
  const [mouseDownClientX, setMouseDownClientX] = useState(0); // 마우스를 클릭한 지점의 x 좌료를 저장합니다
  const [mouseUpClientX, setMouseUpClientX] = useState(0); // 마우스를 땐 지점의 x 좌표를 저장합니다.

  //반응형 사이트
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // 사용자의 화면크기 정보를 받아 반응형 사이트에 사용합니다.

  const increaseClick = async () => {
    if (isSlide) {
      return;
    }
    setX(-56);
    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === 8 ? 0 : prev + 1));
      setX(0);
      setIsSlide(false);
    }, 500);
    //setIndex((prev) => (prev === 7 ? 0 : prev + 1));
  };
  const decreaseClick = async () => {
    if (isSlide) {
      return;
    }
    setX(+56);
    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === 0 ? 8 : prev - 1));
      setX(0);
      setIsSlide(false);
    }, 500);
  };
  const morePrevImg = index === 1 ? 8 : index === 0 ? 7 : index - 2;
  const PrevImg = index === 0 ? 8 : index - 1;
  const NextImg = index === 8 ? 0 : index + 1;
  const moreNextImg = index === 8 ? 1 : index === 7 ? 0 : index + 2;
  //console.log(slideRef.current);
  //console.log(index);

  const onMouseDown = (event) => {
    setIsClick(true);
    setMouseDownClientX(event.pageX);
    console.log(slideRef);
  };
  const onMouseLeave = (event) => {
    setIsClick(false);
  };
  const onMouseUp = (event) => {
    setIsClick(false);
    const imgX = mouseDownClientX - mouseUpClientX;
    // console.log(imgX);
    if (imgX < -100) {
      slideRef.current.style.transform = `translateX(${imgX}px)`;
      increaseClick();
    } else if (imgX > 100) {
      slideRef.current.style.transform = `translateX(${imgX}px)`;
      decreaseClick();
    }
  };
  const onMouseMove = (event) => {
    if (!isClick) return;
    event.preventDefault();
    setMouseUpClientX(event.pageX);
    const imgX = mouseDownClientX - mouseUpClientX;
    if (Math.abs(imgX) > 100) {
      // slideRef.current.style.transform = `translateX(${imgX}px)`;
    }
  };
  const resizeWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, []);

  useEffect(() => {
    const autoPage = setTimeout(() => {
      setX(-56);
      setIsSlide(true);
      setTimeout(() => {
        setIndex((prev) => (prev === 8 ? 0 : prev + 1));
        setX(0);
        setIsSlide(false);
      }, 500);
    }, 5000);
    return () => {
      clearTimeout(autoPage);
    };
  }, [index, isClick]);
  console.log(`브라우저 사이즈 : ${windowWidth}`);
  return (
    <Wrapper>
      <LeftButton
        style={{
          left:
            windowWidth > 1800
              ? `18.5%`
              : windowWidth > 1500
              ? `10%`
              : windowWidth > 1300
              ? `5%`
              : `0%`,
          visibility: windowWidth < 1335 ? "hidden" : "visible",
        }}
        onClick={decreaseClick}
      >
        <img src={btn_slide_prev} />
      </LeftButton>
      <Row
        key={index}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        ref={slideRef}
        style={{
          transform: `translateX(${x}vw)`,
        }}
      >
        <Container>
          <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[morePrevImg]}
          ></PrivewImg>
        </Container>
        <Container>
          <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[PrevImg]}
          ></PrivewImg>
        </Container>
        <ImgWrapper>
          <Img
            style={{
              opacity: 1,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[index]}
          />
        </ImgWrapper>
        <Container>
          <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[NextImg]}
          ></PrivewImg>
        </Container>
        <Container>
          <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[moreNextImg]}
          ></PrivewImg>
        </Container>
      </Row>

      <RightButton
        style={{
          right:
            windowWidth > 1800
              ? `18.5%`
              : windowWidth > 1500
              ? `10%`
              : windowWidth > 1200
              ? `5%`
              : `0%`,
          visibility: windowWidth < 1335 ? "hidden" : "visible",
        }}
        onClick={increaseClick}
      >
        <img src={btn_slide_next} />
      </RightButton>
    </Wrapper>
  );
}

export default Slider;

/**
슬라이드 구조

**전체
<Wrapper>
  <LeftButton/>
  <Row/>
  <RightButton/>
</Wrapper>

**Row
<Row>
  <Container/>
  <Container/>
  <ImgWrapper/>
  <Container/>
  <Container/>
<Row/>

**Row - Container
<Container>
  <PrivewImg/>
<Container>

**Row - ImgWrapper
<ImgWrapper>
  <Img/>
  <ImgDes/>
  <MiniWrapper/>
<ImgWrapper>

*/
