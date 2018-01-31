import { Injectable } from '@angular/core';
import { Member } from '../_models/member';
import { MEMBERS } from '../_models/mock_models';

@Injectable()
export class MemberService {
  members: Member[];

  constructor() {
    this.members = MEMBERS;
  }

  getMembers() {
    return this.members;
  }

}
