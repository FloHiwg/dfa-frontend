import { Component, OnInit } from '@angular/core';
import { BoatService } from '../_services/boat.service';
import { Boat, BoatStatus } from '../_models/boat';

@Component({
  selector: 'app-boat-checkin',
  templateUrl: './boat-checkin.component.html',
  styleUrls: ['./boat-checkin.component.css']
})
export class BoatCheckinComponent implements OnInit {
  availableBoats: Boat[] = [];
  inUseBoats: Boat[] = [];
  outOfOrderBoats: Boat[] = [];
  boats: Boat[];
  selectedBoat: Boat;

  constructor(private boatService: BoatService) { }

  ngOnInit() {
    this.boats = this.boatService.getBoats();
    for(let boat of this.boats) {
      if(boat.boatStatus = BoatStatus.AVAILABLE) {
        this.availableBoats.push(boat);
      } else if(boat.boatStatus = BoatStatus.IN_USE) {
        this.inUseBoats.push(boat);
      } else {
        this.outOfOrderBoats.push(boat);
      }
    }
  }

  onSelect(boat:Boat) {
    this.selectedBoat = boat;
  }

  checkOutBoat() {

  }

}
