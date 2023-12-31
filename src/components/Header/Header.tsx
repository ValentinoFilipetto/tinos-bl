import styled from "styled-components";
import { COLORS } from "../../constants/constants";
import pictureData from "../../picture-data";
import { findPictureById } from "../../utils/utils";
import PhotoItem from "../PhotoItem/PhotoItem";

function Header() {
  const headerPicture = findPictureById(pictureData, "a");

  if (headerPicture) {
    return (
      <HeaderWrapper>
        <h1>
          Hi there! I'm <HighlightedText>Valentino Filipetto</HighlightedText>
        </h1>
        <PhotoItem picture={headerPicture} width={200} height={200} />
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  gap: 120px;
  border-bottom: 2px solid grey;
  padding: 32px 0px 64px 0px;
`;

const HighlightedText = styled.span`
  color: ${COLORS.secondary};
`;

export default Header;
