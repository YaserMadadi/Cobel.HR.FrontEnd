import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PositionCategoryService } from './positionCategory.service';
import { PositionCategoryServiceCollection } from './positionCategory.service.collection';

import { PositionCategoryIndexUI } from './index/positionCategory.index';
import { PositionCategory_ModuleFunc } from './positionCategory.module.func';
import { PositionCategory_ModuleMaster } from './positionCategory.module.master';


import { AppraisalApproverConfig_ModuleFunc } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig.module.func';
import { AppraisalApproverConfig_ModuleMaster } from '../../PMS/AppraisalApproverConfig/appraisalApproverConfig.module.master';
import { Position_ModuleFunc } from '../Position/position.module.func';
import { Position_ModuleMaster } from '../Position/position.module.master';
import { Unit_ModuleFunc } from '../Unit/unit.module.func';
import { Unit_ModuleMaster } from '../Unit/unit.module.master';

@NgModule({
  declarations: [
    PositionCategoryIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    PositionCategory_ModuleMaster,
		AppraisalApproverConfig_ModuleMaster,
		Position_ModuleMaster,
		Unit_ModuleMaster,
  ],
  exports: [
    PositionCategoryIndexUI,
		PositionCategory_ModuleMaster,
  ],
  providers: [
    // PositionCategoryService,
    // PositionCategoryServiceCollection
  ]
})
export class PositionCategoryModule {}