import styled from "styled-components";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import SectionsPage from "./SectionsPage";

function HomePage() {
  return (
    <>
      <Header />
      <Wrapper>
        <Navbar />
        <SectionsPage />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  border: 2px solid white;
  display: flex;
  justify-content: space-around;
`;

export default HomePage;
