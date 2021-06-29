import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { StrategicObjectve } from '../strategicObjectve';
import { StrategicObjectveService } from '../strategicObjectve.service';
import { StrategicObjectveDeleteUI } from '../delete/strategicObjectve.delete';
import { StrategicObjectveEditUI } from '../edit/strategicObjectve.edit';



@Component({
  selector: 'pms-strategicObjectve-master',
  templateUrl: './strategicObjectve.master.html',
  styleUrls: ['./strategicObjectve.master.css'],
  providers: [
    StrategicObjectveService,
    
  ]
})
export class StrategicObjectveMasterUI extends MasterModal<StrategicObjectve> {

  constructor(private strategicObjectveService: StrategicObjectveService) {
    super(strategicObjectveService);
  }
}