import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ExcemptionType } from '../excemptionType';
import { ExcemptionTypeService } from '../excemptionType.service';
import { ExcemptionTypeDeleteUI } from '../delete/excemptionType.delete';
import { ExcemptionTypeEditUI } from '../edit/excemptionType.edit';
import { MilitaryServiceExcemptionService } from '../../../HR/MilitaryServiceExcemption/militaryServiceExcemption.service';



@Component({
  selector: 'base-excemptionType-master',
  templateUrl: './excemptionType.master.html',
  styleUrls: ['./excemptionType.master.css'],
  providers: [
    ExcemptionTypeService,
    MilitaryServiceExcemptionService,
  ]
})
export class ExcemptionTypeMasterUI extends MasterModal<ExcemptionType> {

  constructor(private excemptionTypeService: ExcemptionTypeService) {
    super(excemptionTypeService);
  }
}