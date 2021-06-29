import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { MilitaryServiceExcemption } from '../militaryServiceExcemption';
import { MilitaryServiceExcemptionService } from '../militaryServiceExcemption.service';
import { MilitaryServiceExcemptionDeleteUI } from '../delete/militaryServiceExcemption.delete';
import { MilitaryServiceExcemptionEditUI } from '../edit/militaryServiceExcemption.edit';



@Component({
  selector: 'hr-militaryServiceExcemption-master',
  templateUrl: './militaryServiceExcemption.master.html',
  styleUrls: ['./militaryServiceExcemption.master.css'],
  providers: [
    MilitaryServiceExcemptionService,
    
  ]
})
export class MilitaryServiceExcemptionMasterUI extends MasterModal<MilitaryServiceExcemption> {

  constructor(private militaryServiceExcemptionService: MilitaryServiceExcemptionService) {
    super(militaryServiceExcemptionService);
  }
}