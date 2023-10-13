import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <div>
        <h1>Hi there! I'm Valentino Filipetto</h1>
      </div>
      <PicWrapper>
        <img></img>
      </PicWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  border: 2px solid white;
  height: 30vh;
`;

const PicWrapper = styled.div`
  border: 2px solid white;
  width: 200px;
  height: 200px;
  border-radius: 60%;
`;

export default Header;
