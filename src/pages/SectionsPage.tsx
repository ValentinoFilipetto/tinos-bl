import { Outlet } from "react-router-dom";
import styled from "styled-components";

function SectionsPage() {
  return (
    <OutletWrapper>
      <Outlet />
    </OutletWrapper>
  );
}

const OutletWrapper = styled.div`
  width: 700px;
  border-radius: 32px;
  // border: 2px solid white;
  height: 500px;
`;

export default SectionsPage;
