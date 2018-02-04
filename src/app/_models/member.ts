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
  firstname: string;
  lastname: string;
  club: Club;
  sex: string;
  birthday: Date;
}
