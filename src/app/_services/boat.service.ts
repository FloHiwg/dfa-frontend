import { Injectable } from '@angular/core';
import { Boat } from '../_models/boat';
import { Club } from '../_models/club';
import { BOATS } from '../_models/mock_models';

@Injectable()
export class BoatService {

  boats: Boat[];

  constructor() {
    this.boats = BOATS;
  }

  getBoats(): Boat[] {
    console.log(this.boats);
    return this.boats;
  }

  getBoat(id:number): Boat {
    for(let boat of BOATS) {
      if(boat.id == id){
        return boat;
      }
    }
    return undefined;
  }

  updateBoat(boat: Boat) {
    if(boat.id == -1) {
      //new boat
      console.log("new Boat");
      boat.id = this.boats.length + 1;
      this.boats.push(boat);
      console.log("new boat list");
      console.log(this.boats);
    } else {
      //update boat
      console.log("update Boat with id " + boat.id);
      let targetIndex: number = -1;
      for (const {item, index} of this.boats.map((item, index) => ({ item, index }))) {
        if(item.id == boat.id) {
          item.name = boat.name;
          item.boatCox = boat.boatCox;
          item.boatRigger = boat.boatRigger;
          item.boatSlots = boat.boatSlots;
          item.boatType = boat.boatType;
          targetIndex = index;
        }
      }
      if(targetIndex == -1) {
        boat.id = -1;
        this.updateBoat(boat);
      }
      console.log("new boat list");
      console.log(this.boats);
    }
  }
}
