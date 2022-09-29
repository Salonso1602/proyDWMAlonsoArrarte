import { Injectable } from '@angular/core';
import { IImage } from '@interfaces/image';
import { map, Observable, of, throwError } from 'rxjs';

const IMAGES_DIR = 'assets/images/';

const images: IImage[] = [
  {
    id: '0001',
    path: `tree.jpg`
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
