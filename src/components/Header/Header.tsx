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
  justify-content: center;
  gap: 144px;
  height: 30vh;
  border-bottom: 2px solid grey;
  padding-top: 32px;
`;

const PicWrapper = styled.div`
  border: 2px solid white;
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: 60%;
`;

export default Header;
