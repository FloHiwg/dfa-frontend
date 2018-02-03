import { Injectable } from '@angular/core';
import { Log, RideStatuses } from '../_models/log';
import { BoatService } from './boat.service';
import { LOGS } from '../_models/mock_models';

@Injectable()
export class LogService {
  logs: Log[] = [];

  constructor(private boatService: BoatService) {
    this.logs = LOGS;
  }

  addLog(log: Log) {
    this.boatService.setBoatStatusToInUse(log.boat.id);
    this.logs.push(log);
    console.log(log);
  }

  public getRunningLogs(): Log[] {
    var runningLogs: Log[] = [];
    for(let log of this.logs) {
      if(log.status == RideStatuses.RUNNING) {
        runningLogs.push(log);
      }
    }
    return runningLogs;
  }

}
