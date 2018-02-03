import { Component, OnInit } from '@angular/core';
import { Log } from '../_models/log';
import { LOGS } from '../_models/mock_models';

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

  log: Log = LOGS[0];
  HOURS: String[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "29", "20", "21", "22", "23"];
  MINUTES: String[] = ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

  tempEndDate: TempDate = new TempDate();

  constructor() { }

  ngOnInit() {
  }

}
