import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoDetailsComponent } from './more-info-details.component';

describe('MoreInfoDetailsComponent', () => {
  let component: MoreInfoDetailsComponent;
  let fixture: ComponentFixture<MoreInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
