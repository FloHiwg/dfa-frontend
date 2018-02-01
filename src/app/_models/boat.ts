import { Club } from "./club";

export enum BoatStatus {
  AVAILABLE = "Verfügbar",
  IN_USE = "In Benutztung",
  OUT_OF_ORDER = "Nicht Verfügbar"
}

export enum BoatType {
  RACE_BOAT = "Rennboot",
  WHERRY = "Wherry",
  TRIMMY = "Trimmy",
  /*"A-Gig",
  "B-Gig",
  "C-Gig",
  "D-Gig",
  "E-Gig",
  "Inrigger",
  "Barke",
  "Kirchboot",
  "Ergo",
  "Motorboot"*/
}

export class BoatSlot {
  name: String;
  personCount: number;
}

export const BoatSlots: { [key: string]: BoatSlot; } = { };
BoatSlots.SINGLE = {
  name: "Einer",
  personCount: 1
}
BoatSlots.DOUBLE = {
  name: "Zweier",
  personCount: 2
}
BoatSlots.QUAD = {
  name: "Vierer",
  personCount: 4
}
BoatSlots.OCTUPLE = {
  name: "Achter",
  personCount: 8
}

export enum BoatRigger {
  SWEEP = "Riemen",
  SCULLING = "Skull"
}

export class BoatCox {
  name: String;
  personCount: number;
}
export const BoatCoxs: { [key: string]: BoatCox; } = { };
BoatCoxs.COXED = {
  name: "mit Steuermann",
  personCount: 1
}
BoatCoxs.COXLESS = {
  name: "ohne Steuermann",
  personCount: 0
}

export class Boat {
  id: number;
  name: String;
  club: Club;
  boatType: BoatType;
  boatSlots: BoatSlot;
  boatRigger: BoatRigger;
  boatCox: BoatCox;
  boatStatus: BoatStatus = BoatStatus.AVAILABLE;
}
