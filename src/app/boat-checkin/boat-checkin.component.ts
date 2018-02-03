import { Component, OnInit } from '@angular/core';
import { BoatService } from '../_services/boat.service';
import { Boat, BoatStatus } from '../_models/boat';
import { Log } from '../_models/log';
import { LogService } from '../_services/log.service';

@Component({
  selector: 'app-boat-checkin',
  templateUrl: './boat-checkin.component.html',
  styleUrls: ['./boat-checkin.component.css']
})
export class BoatCheckinComponent implements OnInit {
  availableBoats: Boat[] = [];
  boats: Boat[];
  selectedBoat: Boat;
  selectedLog: Log;
  runningLogs: Log[];

  constructor(private boatService: BoatService, private logService: LogService) { }

  ngOnInit() {
    this.availableBoats = this.boatService.getAvailableBoats();
    this.runningLogs = this.logService.getRunningLogs();
  }

  onSelectBoat(boat:Boat) {
    this.selectedBoat = boat;
  }

  onSelectLog(log:Log) {
    this.selectedLog = log;
  }

  checkOutBoat() {

  }

}
