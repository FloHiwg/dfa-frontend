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

  getMember(memberId: number): Member {
    console.log("memberId " + memberId);
    var members = this.getMembers();
    console.log(members);
    for(let member of members) {
      console.log("member - > ");
      console.log(member);
      if(member.id == memberId){
        return member;
      }
    }
    return undefined;
  }

}
