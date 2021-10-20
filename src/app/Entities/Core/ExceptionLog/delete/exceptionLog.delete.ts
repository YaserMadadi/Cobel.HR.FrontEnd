

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ExceptionLog } from '../exceptionLog';
import { ExceptionLogService } from '../exceptionLog.service';


@Component({
  selector: 'core-exceptionLog-delete',
  templateUrl: './exceptionLog.delete.html',
  styleUrls: ['./exceptionLog.delete.css'],
  providers: [ExceptionLogService]
})
export class ExceptionLogDeleteUI extends DeleteModal<ExceptionLog> {

    constructor(private exceptionLogService: ExceptionLogService){
        super(exceptionLogService);
    }

}
