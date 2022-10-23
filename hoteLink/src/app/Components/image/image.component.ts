import { Component, Input, OnInit } from '@angular/core';
import { IImage } from '@interfaces/image';
import { MediaService } from '@services/media.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() imageId: string = '0001';
  @Input() alt = '';
  @Input() css = {};

  image: Observable<IImage>;

  constructor(
    private _mediaService: MediaService
  ) {
    this.image = this._mediaService.getImageById(this.imageId);
  }

  ngOnInit(): void {}
}
