import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AppraiseTime } from '../appraiseTime';
import { AppraiseTimeService } from '../appraiseTime.service';


@Component({
  selector: 'base-pms-appraiseTime-delete',
  templateUrl: './appraiseTime.delete.html',
  styleUrls: ['./appraiseTime.delete.css'],
  
})
export class AppraiseTimeDeleteUI extends DeleteModal<AppraiseTime> {

    constructor(private appraiseTimeService: AppraiseTimeService){
        super(appraiseTimeService);
    }

}