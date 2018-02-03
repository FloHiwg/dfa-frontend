import {Boat} from "./boat";
import {Member} from "./member";

export enum RideType {
  NORMAL_RIDE = "Normale Fahrt",
  BOOTCAMP = "Trainingslager",
  JOURNEY = "Wanderfahrt",
  BOAT_RACE = "Regatta"
}

export class RideStatus {
  name: String;
}
export const RideStatuses: { [key: string]: RideStatus; } = { };
RideStatuses.RUNNING = {
  name: "Laufend"
};
RideStatuses.FINISHED = {
  name: "BEENDET"
};

export class Log {
  startDate: Date;
  endDate: Date;
  boat: Boat;
  crew: Member[];
  cox: number;
  distance: number;
  rideType: RideType;
  status: RideStatus;
}
