import { Boat } from "./boat";
import { Member } from "./member";
import { Club } from "./club";

export enum RideType {
  NORMAL_RIDE = "Normale Fahrt",
  BOOTCAMP = "Trainingslager",
  JOURNEY = "Wanderfahrt",
  BOAT_RACE = "Regatta"
}

export class RideStatus {
  name: string;
}
export const RideStatuses: { [key: string]: RideStatus; } = { };
RideStatuses.RUNNING = {
  name: "Laufend"
};
RideStatuses.FINISHED = {
  name: "Beendet"
};

export class Log {
  id: number;
  club: Club;
  startDate: Date;
  endDate: Date;
  boat: Boat;
  crew: Member[];
  cox: number;
  distance: number;
  rideType: RideType;
  status: RideStatus;
}
