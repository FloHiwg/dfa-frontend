import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { CLUB } from '../_models/mock_models';

@Injectable()
export class UserService {
  currentUser: User;

  constructor() {
    this.login();
  }

  login() {
    this.currentUser = {
      id: 1,
      group: "admin",
      name: "FlorianHeiwig",
      email: "Florian.Hiwg@gmail.com",
      club: CLUB
    }
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

}
