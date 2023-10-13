import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarWrapper>
      <nav>
        <ul>
          <SectionLink>
            <Link to={"about"}>About Me</Link>
          </SectionLink>
          <SectionLink>
            <Link to={"music"}>Music</Link>
          </SectionLink>
          <SectionLink>
            <Link to={"politics"}>Politics</Link>
          </SectionLink>
          <SectionLink>
            <Link to={"contact"}>Contact</Link>
          </SectionLink>
        </ul>
      </nav>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  border: 2px solid white;
  width: 400px;
`;

const SectionLink = styled.li``;

export default Navbar;
