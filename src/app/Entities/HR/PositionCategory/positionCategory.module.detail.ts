import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PositionCategoryService } from './positionCategory.service';
import { PositionCategoryServiceCollection } from './positionCategory.service.collection';


import { DepartmentCategory_AppraisalApproverConfig_DetailUI } from './detail/departmentCategory-appraisalApproverConfig.detail';
import { AppraisalApproverConfig_ModuleMaster } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig.module.master';
import { PositionCategory_Position_DetailUI } from './detail/positionCategory-position.detail';
import { Position_ModuleMaster } from '../Position/position.module.master';
import { PositionCategory_Unit_DetailUI } from './detail/positionCategory-unit.detail';
import { Unit_ModuleMaster } from '../Unit/unit.module.master';

@NgModule({
  declarations: [
    DepartmentCategory_AppraisalApproverConfig_DetailUI,
		PositionCategory_Position_DetailUI,
		PositionCategory_Unit_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		AppraisalApproverConfig_ModuleMaster,
		Position_ModuleMaster,
		Unit_ModuleMaster,
  ],
  exports: [
    DepartmentCategory_AppraisalApproverConfig_DetailUI,
		PositionCategory_Position_DetailUI,
		PositionCategory_Unit_DetailUI
  ],
  providers: [
    //PositionCategoryService,
    //PositionCategoryServiceCollection
  ]
})
export class PositionCategory_ModuleDetail { }