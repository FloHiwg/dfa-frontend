import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boat, BoatCoxs } from '../_models/boat';
import { Log, RideType, RideStatuses } from '../_models/log';
import { Member } from '../_models/member';
import { MemberService } from '../_services/member.service';
import { BoatService } from '../_services/boat.service';
import { LogService } from '../_services/log.service';
import { Router } from '@angular/router';

export class TempDate {
  hour = undefined;
  minute = undefined;
  date = undefined;
}

@Component({
  selector: 'app-boat-checkout-dialog',
  templateUrl: './boat-checkout-dialog.component.html',
  styleUrls: ['./boat-checkout-dialog.component.css']
})
export class BoatCheckoutDialogComponent implements OnInit {
  boat: Boat;
  boatCoxs = BoatCoxs;
  personCount: number;
  crew: Member[] = [];
  log: Log;
  members: Member[];
  selectedMembers: Member[] = [];
  sub: any;
  HOURS: String[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "29", "20", "21", "22", "23"];
  MINUTES: String[] = ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

  tempStartDate: TempDate = new TempDate();

  rideTypes = RideType;
  rideTypesKeys = Object.keys(this.rideTypes);


  constructor(private route: ActivatedRoute, private memberService: MemberService, private boatService: BoatService, private logService: LogService, private router: Router) {
  }

  ngOnChanges(changes) {
    this.renderForm()
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.boat = this.boatService.getBoat(+params['boatId']);
      this.members = this.memberService.getMembers().slice();
      this.renderForm();
    });
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
      id: -1,
      startDate: new Date(),
      endDate: new Date(),
      boat: this.boat,
      crew: this.crew,
      cox: undefined,
      distance: undefined,
      rideType: RideType.NORMAL_RIDE,
      status: RideStatuses.RUNNING
    }
  }

  saveLog(){
    this.log.startDate = new Date(this.tempStartDate.date + " " + this.tempStartDate.hour + ":" + this.tempStartDate.minute);
    this.logService.updateLog(this.log);
    this.router.navigate(['/dashboard']);
  }
}
