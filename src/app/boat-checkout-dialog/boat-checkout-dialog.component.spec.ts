import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatCheckoutDialogComponent } from './boat-checkout-dialog.component';

describe('BoatCheckoutDialogComponent', () => {
  let component: BoatCheckoutDialogComponent;
  let fixture: ComponentFixture<BoatCheckoutDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatCheckoutDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatCheckoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
