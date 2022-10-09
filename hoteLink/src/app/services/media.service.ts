import { Injectable } from '@angular/core';
import { IImage } from '@interfaces/image';
import { map, Observable, of, throwError } from 'rxjs';

const IMAGES_DIR = 'assets/images/';

const images: IImage[] = [
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
];

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  getImageById(id: string): Observable<IImage> {
    return of(
      (() => {
        const image = images.find(image => image.id === id);

        if (!image) {
          throw new Error(`Image with id ${id} not found`);
        }
        else {
          return {
            ...image,
            path: `${IMAGES_DIR}${image.path}`
          };
        }
      })());
  }
}
