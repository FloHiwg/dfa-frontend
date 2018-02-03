import { Injectable } from '@angular/core';
import { Log, RideStatuses } from '../_models/log';
import { BoatService } from './boat.service';
import { LOGS } from '../_models/mock_models';
import { BoatStatus } from '../_models/boat';

@Injectable()
export class LogService {
  logs: Log[] = [];

  constructor(private boatService: BoatService) {
    this.logs = LOGS;
  }

  updateLog(log: Log) {
    if(log.id == -1) {
      //new log
      log.id = this.logs.length + 1;
      this.boatService.setBoatStatusToInUse(log.boat.id);
      this.logs.push(log);
    } else {
      //update boat
      let targetIndex: number = -1;
      for (const {item, index} of this.logs.map((item, index) => ({ item, index }))) {
        if(item.id == log.id) {
          item.endDate = log.endDate;
          item.distance = log.distance;
          item.status = RideStatuses.FINISHED;
          this.boatService.setBoatStatusToAvailable(item.boat.id);
          targetIndex = index;
        }
      }
      if(targetIndex == -1) {
        log.id = -1;
        this.updateLog(log);
      }
    }
  }

  getLog(logId: number): Log {
    for(let log of this.logs) {
      if(log.id == logId) {
        return log;
      }
    }
    return undefined;
  }

  getLogs(): Log[] {
    return this.logs;
  }

  getRunningLogs(): Log[] {
    var runningLogs: Log[] = [];
    for(let log of this.logs) {
      if(log.status == RideStatuses.RUNNING) {
        runningLogs.push(log);
      }
    }
    return runningLogs;
  }

}
