import styled from "styled-components";
import { PhotoItemProps } from "../../props/props";

function PhotoItem({ picture, width, height }: PhotoItemProps) {
  const STYLE = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${picture.src.replace(".jpg", ".avif")}`}
      />
      <source type="image/jpg" srcSet={`${picture.src}`} />
      <Image style={STYLE} src={picture.src} alt={picture.alt} />
    </picture>
  );
}

const Image = styled.img`
  border-radius: 40%;
`;

export default PhotoItem;
