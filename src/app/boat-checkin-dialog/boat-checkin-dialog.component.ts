import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Log } from '../_models/log';
import { LOGS } from '../_models/mock_models';
import { LogService } from '../_services/log.service';
import { MemberService } from '../_services/member.service';
import { Router } from '@angular/router';
import { Member } from '../_models/member';

export class TempDate {
  hour = undefined;
  minute = undefined;
  date = undefined;
}

@Component({
  selector: 'app-boat-checkin-dialog',
  templateUrl: './boat-checkin-dialog.component.html',
  styleUrls: ['./boat-checkin-dialog.component.css']
})
export class BoatCheckinDialogComponent implements OnInit {
  sub: any;
  log: Log = undefined;
  cox: Member;
  HOURS: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "29", "20", "21", "22", "23"];
  MINUTES: string[] = ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

  tempEndDate: TempDate = new TempDate();

  constructor(private route: ActivatedRoute, private logService: LogService, private router: Router, private memberService: MemberService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      var members = this.memberService.getMembers();
      this.log = this.logService.getLog(+params['logId']);
      this.cox = this.memberService.getMember(this.log.cox);
    });

  }

  saveLog() {
    this.log.endDate = new Date(this.tempEndDate.date + " " + this.tempEndDate.hour + ":" + this.tempEndDate.minute);
    this.logService.updateLog(this.log);
    this.router.navigate(['/dashboard']);
  }

}
