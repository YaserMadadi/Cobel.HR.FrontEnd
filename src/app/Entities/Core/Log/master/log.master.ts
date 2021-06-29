import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Log } from '../log';
import { LogService } from '../log.service';
import { LogDeleteUI } from '../delete/log.delete';
import { LogEditUI } from '../edit/log.edit';



@Component({
  selector: 'core-log-master',
  templateUrl: './log.master.html',
  styleUrls: ['./log.master.css'],
  providers: [
    LogService,
    
  ]
})
export class LogMasterUI extends MasterModal<Log> {

  constructor(private logService: LogService) {
    super(logService);
  }
}