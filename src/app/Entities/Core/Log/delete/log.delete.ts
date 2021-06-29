import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Log } from '../log';
import { LogService } from '../log.service';


@Component({
  selector: 'core-log-delete',
  templateUrl: './log.delete.html',
  styleUrls: ['./log.delete.css'],
  providers: [LogService]
})
export class LogDeleteUI extends DeleteModal<Log> {

    constructor(private logService: LogService){
        super(logService);
    }

}