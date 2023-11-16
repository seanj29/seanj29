import MinotaurImage from "../images/MinotaurImage.png"
import RenpyImage from "../images/RenpyIcon.png"
import DieceImage from "../images/DieceImage.png"

type ImageData = {
    [key: string]: string;
  }

export const images: ImageData = {
    Minotaurus: MinotaurImage,
    VSRenpy: RenpyImage,
    Diece: DieceImage
}