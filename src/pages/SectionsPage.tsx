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
  background-color: red;
`;

export default SectionsPage;