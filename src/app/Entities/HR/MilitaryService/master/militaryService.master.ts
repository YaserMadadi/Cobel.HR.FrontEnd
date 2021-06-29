import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { MilitaryService } from '../militaryService';
import { MilitaryServiceService } from '../militaryService.service';
import { MilitaryServiceDeleteUI } from '../delete/militaryService.delete';
import { MilitaryServiceEditUI } from '../edit/militaryService.edit';
import { MilitaryServiceInclusiveService } from '../../MilitaryServiceInclusive/militaryServiceInclusive.service';
import { MilitaryServiceExcemptionService } from '../../MilitaryServiceExcemption/militaryServiceExcemption.service';



@Component({
  selector: 'hr-militaryService-master',
  templateUrl: './militaryService.master.html',
  styleUrls: ['./militaryService.master.css'],
  providers: [
    MilitaryServiceService,
    MilitaryServiceInclusiveService,
		MilitaryServiceExcemptionService,
  ]
})
export class MilitaryServiceMasterUI extends MasterModal<MilitaryService> {

  constructor(private militaryServiceService: MilitaryServiceService) {
    super(militaryServiceService);
  }
}