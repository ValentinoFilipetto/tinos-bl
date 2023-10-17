import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants/constants";

function SectionsPage() {
  return (
    <OutletWrapper>
      <Outlet />
    </OutletWrapper>
  );
}

const OutletWrapper = styled.div`
  background-color: ${COLORS.secondary};
  width: 900px;
  border-radius: 30px;
`;

export default SectionsPage;
