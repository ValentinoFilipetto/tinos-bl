import { BsPersonCircle } from "react-icons/bs";
import { ImMusic } from "react-icons/im";
import { MdArticle, MdContactSupport } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants/constants";

function Navbar() {
  return (
    <NavbarWrapper>
      <VerticalBar />
      <Nav>
        <UnorderedList>
          <SectionLink>
            <NavbarLink to={"about"}>
              <BsPersonCircle size={23} />

              <TextLink>About Me</TextLink>
            </NavbarLink>
          </SectionLink>
          <SectionLink>
            <NavbarLink to={"music"}>
              <ImMusic size={23} />

              <TextLink>Music</TextLink>
            </NavbarLink>
          </SectionLink>
          <SectionLink>
            <NavbarLink to={"politics"}>
              <MdArticle size={23} />

              <TextLink>Articles</TextLink>
            </NavbarLink>
          </SectionLink>
          <SectionLink>
            <NavbarLink to={"contact"}>
              <MdContactSupport size={23} />

              <TextLink>Contact</TextLink>
            </NavbarLink>
          </SectionLink>
        </UnorderedList>
      </Nav>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  line-height: 48px;
  // border: 2px solid white;
`;

const VerticalBar = styled.div`
  border-radius: 30px;
  width: 50px;
  background-color: white;
  color: ${COLORS.primary};
  margin-right: -77px;
`;

const Nav = styled.nav``;

const UnorderedList = styled.ul`
  list-style-type: none;
`;

const SectionLink = styled.li`
  text-decoration: none;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  display: block;

  &:hover {
    transition: 0.2s ease;
    color: ${COLORS.secondary};
  }
`;

const TextLink = styled.div`
  margin-left: 28px;
  display: inline-block;

  &:hover {
    transition: transform 250ms;
    transform: translateX(10px);
  }
`;

export default Navbar;
