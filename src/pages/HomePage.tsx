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
  display: flex;
  justify-content: space-evenly;
  margin-top: 48px;
`;

export default HomePage;
