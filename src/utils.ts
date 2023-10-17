import { Picture } from "./types";

export function findPictureById(pictureData: Picture[], id: string) {
  if (pictureData) {
    return pictureData.find((pic: Picture) => {
      return pic.id === id;
    });
  }
}
