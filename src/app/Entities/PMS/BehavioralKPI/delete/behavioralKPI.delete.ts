import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { BehavioralKPI } from '../behavioralKPI';
import { BehavioralKPIService } from '../behavioralKPI.service';


@Component({
  selector: 'pms-behavioralKPI-delete',
  templateUrl: './behavioralKPI.delete.html',
  styleUrls: ['./behavioralKPI.delete.css'],
  
})
export class BehavioralKPIDeleteUI extends DeleteModal<BehavioralKPI> {

    constructor(private behavioralKPIService: BehavioralKPIService){
        super(behavioralKPIService);
    }

}