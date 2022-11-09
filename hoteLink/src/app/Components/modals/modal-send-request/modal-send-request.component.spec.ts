import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSendRequestComponent } from './modal-send-request.component';

describe('ModalSendRequestComponent', () => {
  let component: ModalSendRequestComponent;
  let fixture: ComponentFixture<ModalSendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSendRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
