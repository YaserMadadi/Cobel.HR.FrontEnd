import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PositionCategory } from '../positionCategory';
import { PositionCategoryService } from '../positionCategory.service';
import { PositionCategoryDeleteUI } from '../delete/positionCategory.delete';
import { PositionCategoryEditUI } from '../edit/positionCategory.edit';
import { PositionService } from '../../Position/position.service';
import { UnitService } from '../../Unit/unit.service';
import { AppraisalApproverConfigService } from '../../../PMS/AppraisalApproverConfig/appraisalApproverConfig.service';



@Component({
  selector: 'hr-positionCategory-master',
  templateUrl: './positionCategory.master.html',
  styleUrls: ['./positionCategory.master.css'],
  providers: [
    PositionCategoryService,
    PositionService,
		UnitService,
		AppraisalApproverConfigService,
  ]
})
export class PositionCategoryMasterUI extends MasterModal<PositionCategory> {

  constructor(private positionCategoryService: PositionCategoryService) {
    super(positionCategoryService);
  }
}