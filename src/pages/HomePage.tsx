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
  justify-content: center;
  margin-top: 48px;
  gap: 32px;
`;

export default HomePage;
