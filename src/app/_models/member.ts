import { Club } from './club';

export class MemberStatus {
  name: String;
}
export const MemberStatuses: { [key: string]: MemberStatus; } = { };
MemberStatuses.AVAILABLE = {
  name: "Verfügbar"
};
MemberStatuses.UNAVAILABLE = {
  name: "Nicht Verfügbar"
};

export class Member {
  id: number;
  firstname: String;
  lastname: String;
  club: Club;
  sex: String;
  birthday: Date;
}
