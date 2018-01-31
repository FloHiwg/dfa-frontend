import {Boat} from "./boat";
import {Member} from "./member";

export enum RideType {
  NORMAL_RIDE = "Normale Fahrt",
  BOOTCAMP = "Trainingslager",
  JOURNEY = "Wanderfahrt",
  BOAT_RACE = "Regatta"
}

export class Log {
  startDate: Date;
  endDate: Date;
  boat: Boat;
  crew: Member[];
  cox: number;

}
