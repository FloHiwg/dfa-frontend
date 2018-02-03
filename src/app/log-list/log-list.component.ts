import { Component, OnInit } from '@angular/core';
import { Log } from '../_models/log';
import { LogService } from '../_services/log.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
  logs: Log[];

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logs = this.logService.getLogs();
  }

}
