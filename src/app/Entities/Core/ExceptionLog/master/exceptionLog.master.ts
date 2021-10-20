import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ExceptionLog } from '../exceptionLog';
import { ExceptionLogService } from '../exceptionLog.service';
import { ExceptionLogDeleteUI } from '../delete/exceptionLog.delete';
import { ExceptionLogEditUI } from '../edit/exceptionLog.edit';
import { CommandParameterService } from '../../CommandParameter/commandParameter.service';



@Component({
  selector: 'core-exceptionLog-master',
  templateUrl: './exceptionLog.master.html',
  styleUrls: ['./exceptionLog.master.css'],
  providers: [
    ExceptionLogService,
    CommandParameterService,
  ]
})
export class ExceptionLogMasterUI extends MasterModal<ExceptionLog> {

  constructor(private exceptionLogService: ExceptionLogService) {
    super(exceptionLogService);
  }
}
