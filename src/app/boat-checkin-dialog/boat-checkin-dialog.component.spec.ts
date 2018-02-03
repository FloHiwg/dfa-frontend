import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatCheckinDialogComponent } from './boat-checkin-dialog.component';

describe('BoatCheckinDialogComponent', () => {
  let component: BoatCheckinDialogComponent;
  let fixture: ComponentFixture<BoatCheckinDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatCheckinDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatCheckinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
