import { Picture } from "../types/types";

export interface PhotoItemProps {
  picture: Picture;
  width: number;
  height: number;
}

export interface ArticleItemProps {
  markdown: string;
}

export interface ArticleCardProps {
  title: string;
}
