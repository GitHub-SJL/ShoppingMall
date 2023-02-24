/* NavBars 컴포넌트 */
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  let navigate = useNavigate();
  return (
    <>
      <Nav></Nav>
    </>
  );
};

const Nav = styled.div`
  width: 100%;
  height: 5%;
  background-color: #eee;
`;

export default Header;
