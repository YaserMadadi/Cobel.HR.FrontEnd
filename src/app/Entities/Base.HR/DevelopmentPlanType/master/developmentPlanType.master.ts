import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { DevelopmentPlanType } from '../developmentPlanType';
import { DevelopmentPlanTypeService } from '../developmentPlanType.service';
import { DevelopmentPlanTypeDeleteUI } from '../delete/developmentPlanType.delete';
import { DevelopmentPlanTypeEditUI } from '../edit/developmentPlanType.edit';



@Component({
  selector: 'base-hr-developmentPlanType-master',
  templateUrl: './developmentPlanType.master.html',
  styleUrls: ['./developmentPlanType.master.css'],
  providers: [
    DevelopmentPlanTypeService,
    
  ]
})
export class DevelopmentPlanTypeMasterUI extends MasterModal<DevelopmentPlanType> {

  constructor(private developmentPlanTypeService: DevelopmentPlanTypeService) {
    super(developmentPlanTypeService);
  }
}
