import styled from "styled-components";
import { ArticleCardProps } from "../../props/props";

function ArticleCard({ title }: ArticleCardProps) {
  return <CardWrapper>{title}</CardWrapper>;
}

const CardWrapper = styled.div`
  border: 2px solid white;
  width: 100%;
  flex: 1;
  border-radius: 32px;
  margin-bottom: 32px;
  height: 162px;
`;

export default ArticleCard;
