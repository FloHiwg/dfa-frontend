import { Boat, BoatCoxs, BoatType, BoatSlots, BoatRigger, BoatStatus } from './boat';
import { Club } from './club';
import { Member } from './member';
import { Log } from './log';


export const CLUB: Club = {
  id: 1,
  name: "ARV"
}

export const MEMBERS: Member[] = [
  {
    id: 1,
    firstname: "Florian",
    lastname: "Heiwig",
    club: CLUB,
    sex: "male",
    birthday: new Date(),
  },
  {
    id: 2,
    firstname: "Christian",
    lastname: "Sichla",
    club: CLUB,
    sex: "male",
    birthday: new Date(),
  }
]

export const BOATS: Boat[] = [
  {
    id: 1,
    name: "Musen Sohn",
    club: CLUB,
    boatCox: BoatCoxs.COXLESS,
    boatType: BoatType.RACE_BOAT,
    boatSlots: BoatSlots.SINGLE,
    boatRigger: BoatRigger.SWEEP,
    boatStatus: BoatStatus.AVAILABLE
  },
  {
    id: 2,
    name: "Hängt Achtfach",
    club: CLUB,
    boatCox: BoatCoxs.COXED,
    boatType: BoatType.RACE_BOAT,
    boatSlots: BoatSlots.DOUBLE,
    boatRigger: BoatRigger.SWEEP,
    boatStatus: BoatStatus.AVAILABLE
  }
]
