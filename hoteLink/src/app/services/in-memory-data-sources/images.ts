import { IImage } from "@interfaces/image";

const IMAGES_DIR = 'assets/images/';

export const images: IImage[] = [
  {
    id: '0001',
    path: `tree.jpg`
  },
  {
    id: '0002',
    path: `activities/fulvo.jpg`
  },
  {
    id: '0003',
    path: `activities/fogon.jpg`
  },
  {
    id: '0004',
    path: `foods/brochetaVeg.jpg`
  },
  {
    id: '0005',
    path: `foods/cake.jpg`
  }
].map(image => {
  return {
    ...image,
    path: `${IMAGES_DIR}${image.path}`
  };
});