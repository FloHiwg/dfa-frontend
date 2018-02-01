import { Component, OnInit, Input } from '@angular/core';
import { Boat } from '../_models/boat';
import { User } from '../_models/user';
import { ActivatedRoute } from '@angular/router';
import { BoatService } from '../_services/boat.service';
import { UserService } from '../_services/user.service';
import { BoatType, BoatCoxs, BoatSlots, BoatRigger, BoatStatus } from '../_models/boat';

enum E { A, B }

@Component({
  selector: 'app-boat-update',
  templateUrl: './boat-update.component.html',
  styleUrls: ['./boat-update.component.css']
})
export class BoatUpdateComponent implements OnInit {
  id: number;
  boat: Boat;
  private sub: any;
  title: String = "";
  user: User;

  boatTypes = BoatType;
  boatTypesKeys = Object.keys(this.boatTypes);

  boatSlots = BoatSlots;
  boatSlotsKeys = Object.keys(this.boatSlots);

  boatCoxs = BoatCoxs;
  boatCoxsKeys = Object.keys(this.boatCoxs);

  boatRigger = BoatRigger;
  boatRiggerKeys = Object.keys(this.boatRigger);

  constructor(private route: ActivatedRoute, private boatService: BoatService, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    console.log(this.user);

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if(this.id >= 0){
        this.boat = this.boatService.getBoat(this.id);
        this.title = "Boot bearbeiten"
      } else {
        this.boat = {
          id: -1,
          name: "",
          boatType: BoatType.RACE_BOAT,
          boatCox: BoatCoxs.COXED,
          boatRigger: BoatRigger.SCULLING,
          boatSlots: BoatSlots.SINGLE,
          club: this.userService.getCurrentUser().club,
          boatStatus: BoatStatus.AVAILABLE
        }
        this.title = "Boot hinzufügen"
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  saveChanges() {
    console.log("saveChanges() got triggered");
    this.boatService.updateBoat(this.boat);
  }
}
