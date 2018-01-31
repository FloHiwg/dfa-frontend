import { Component, OnInit, Input } from '@angular/core';
import { Boat } from '../_models/boat';

@Component({
  selector: 'app-boat-checkout-dialog',
  templateUrl: './boat-checkout-dialog.component.html',
  styleUrls: ['./boat-checkout-dialog.component.css']
})
export class BoatCheckoutDialogComponent implements OnInit {
  @Input() boat: Boat;

  constructor() { }

  ngOnInit() {
  }

}
