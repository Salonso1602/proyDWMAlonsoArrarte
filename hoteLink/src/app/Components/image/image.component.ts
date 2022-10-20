import { Component, Input, OnInit } from '@angular/core';
import { IImage } from '@interfaces/image';
import { MediaService } from '@services/media.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() imageId: string = '0001';
  @Input() alt = '';
  @Input() css = {};

  image?: IImage;

  constructor(
    private _mediaService: MediaService
  ) { }

  ngOnInit(): void {
    this._mediaService.getImageById(this.imageId).subscribe({
      next: image => this.image = image,
      error: error => console.error(error)
    });
  }
}
