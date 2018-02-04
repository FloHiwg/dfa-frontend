import { Club } from '../_models/club'

export class User {
  id: number;
  group: string;
  name: string;
  email: string;
  club: Club;
}
