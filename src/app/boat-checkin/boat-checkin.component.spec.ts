import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatCheckinComponent } from './boat-checkin.component';

describe('BoatCheckinComponent', () => {
  let component: BoatCheckinComponent;
  let fixture: ComponentFixture<BoatCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
