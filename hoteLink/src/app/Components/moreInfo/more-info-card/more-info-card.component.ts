import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '@interfaces/hotel';

@Component({
  selector: 'app-more-info-card',
  templateUrl: './more-info-card.component.html',
  styleUrls: ['./more-info-card.component.scss']
})
export class MoreInfoCardComponent implements OnInit {

  @Input() hotel? : IHotel;

  constructor() { }

  ngOnInit(): void {
  }

}
