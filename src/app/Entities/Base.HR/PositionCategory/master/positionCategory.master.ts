import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PositionCategory } from '../positionCategory';
import { PositionCategoryService } from '../positionCategory.service';
import { PositionCategoryDeleteUI } from '../delete/positionCategory.delete';
import { PositionCategoryEditUI } from '../edit/positionCategory.edit';
import { UnitService } from '../../../HR/Unit/unit.service';
import { AppraisalApproverConfigService } from '../../../PMS/AppraisalApproverConfig/appraisalApproverConfig.service';
import { PositionService } from '../../../HR/Position/position.service';



@Component({
  selector: 'base-hr-positionCategory-master',
  templateUrl: './positionCategory.master.html',
  styleUrls: ['./positionCategory.master.css']
})
export class PositionCategoryMasterUI extends MasterModal<PositionCategory> {

  constructor(private positionCategoryService: PositionCategoryService) {
    super(positionCategoryService);
  }
}
