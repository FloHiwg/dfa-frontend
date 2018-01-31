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

export enum BoatSlots {
  SINGLE = "Einer",
  DOUBLE = "Zweier",
  /*"Doppelzweier",
  "Dreier",*/
  QUAD = "Vierer",
  /*"Doppelvierer",
  "Fünfer",
  "Sechser",
  "Doppelsechser",*/
  OCTUPLE = "Achter",
  //"Doppelachter"
}

export enum BoatRigger {
  SWEEP = "Riemen",
  SCULLING = "Skull"
}

export enum BoatCox {
  COXED = "mit Steuermann",
  COXLESS = "ohne Steuermann"
}

export class Boat {
  id: number;
  name: String;
  club: Club;
  boatType: BoatType;
  boatSlots: BoatSlots;
  boatRigger: BoatRigger;
  boatCox: BoatCox;
  boatStatus: BoatStatus = BoatStatus.AVAILABLE;
}
