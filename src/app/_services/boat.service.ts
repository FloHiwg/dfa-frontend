import { Injectable } from '@angular/core';
import { Boat, BoatStatus } from '../_models/boat';
import { Club } from '../_models/club';
import { BOATS } from '../_models/mock_models';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BoatService {
  private serverEndpoint: string;

  boats: Boat[];

  constructor() {
    this.boats = BOATS;
  }

  getBoats(): Boat[] {
    return this.boats;
  }

  getAvailableBoats(): Boat[] {
    var availableBoats: Boat[] = [];
    for(let boat of this.boats){
      if(boat.boatStatus == BoatStatus.AVAILABLE) {
        availableBoats.push(boat);
      }
    }
    return availableBoats;
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
      boat.id = this.boats.length + 1;
      this.boats.push(boat);
    } else {
      //update boat
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
    }
  }

  setBoatStatusToInUse(boatId:number) {
    this.changeBoatStatus(boatId, BoatStatus.IN_USE);
  }

  setBoatStatusToAvailable(boatId:number) {
    this.changeBoatStatus(boatId, BoatStatus.AVAILABLE);
  }

  changeBoatStatus(boatId:number, boatStatus: BoatStatus) {
    this.getBoat(boatId).boatStatus = boatStatus;
  }
}
