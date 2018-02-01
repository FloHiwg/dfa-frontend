import { Component, OnInit, Input } from '@angular/core';
import { Boat, BoatCoxs } from '../_models/boat';
import { Log, RideType } from '../_models/log';
import { Member } from '../_models/member';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-boat-checkout-dialog',
  templateUrl: './boat-checkout-dialog.component.html',
  styleUrls: ['./boat-checkout-dialog.component.css']
})
export class BoatCheckoutDialogComponent implements OnInit {
  @Input() boat: Boat;
  boatCoxs = BoatCoxs;
  personCount: number;
  crew: Member[] = [];
  log: Log;
  members: Member[];
  selectedMembers: Member[] = [];

  temp: String;

  rideTypes = RideType;
  rideTypesKeys = Object.keys(this.rideTypes);

  constructor(private memberService: MemberService) {
  }

  ngOnChanges(changes) {
    this.renderForm()
  }

  ngOnInit() {
    this.members = this.memberService.getMembers();
    this.renderForm();
  }

  public onChange(memberId:number, position: number) {
    this.log.crew[position] = this.selectMember(memberId);
  }

  selectMember(id:number): Member {
    var selectedMember: Member = undefined;
    var itemIndex: number = -1;
    this.members.forEach((item, index) => {
      if(item.id == id) {
        itemIndex = index;
      }
    });
    if (itemIndex > -1) {
      selectedMember = this.members[itemIndex];
      this.selectedMembers.push(this.members[itemIndex]);
      this.members.splice(itemIndex, 1);
    }
    return selectedMember;
  }

  indexOfMember(member: Member) {
    var itemIndex: number = -1;
    this.selectedMembers.forEach((item, index) => {
      if(item.id == member.id) {
        itemIndex = index;
      }
    });
    if (itemIndex > -1) {
      this.selectedMembers.splice(itemIndex, 1);
    }
  }

  removeSelection(position:number) {
    this.members.push(this.log.crew[position]);
    this.indexOfMember(this.log.crew[position]);
    this.log.crew[position] = new Member();
  }

  renderForm(){
    this.log = new Log();
    this.crew = [];
    this.personCount = this.boat.boatCox.personCount + this.boat.boatSlots.personCount;
    for(var _i = 0; _i < this.personCount; _i++) {
      this.crew.push(new Member());
    }

    this.log = {
      startDate: new Date(),
      endDate: new Date(),
      boat: this.boat,
      crew: this.crew,
      cox: undefined,
      distance: undefined,
      rideType: RideType.NORMAL_RIDE
    }
  }
}
