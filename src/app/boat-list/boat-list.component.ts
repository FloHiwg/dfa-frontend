import { Component, OnInit } from '@angular/core';
import { BoatService } from '../_services/boat.service';
import { Boat } from '../_models/boat';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.css']
})
export class BoatListComponent implements OnInit {
  boats: Boat[];

  getBoats(): void {
    this.boats = this.boatService.getBoats();
  }

  constructor(private boatService: BoatService) { }

  ngOnInit() {
    this.getBoats();
  }

}
