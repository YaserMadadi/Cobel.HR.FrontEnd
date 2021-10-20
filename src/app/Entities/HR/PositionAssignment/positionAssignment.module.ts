import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PositionAssignmentService } from './positionAssignment.service';
import { PositionAssignmentServiceCollection } from './positionAssignment.service.collection';

import { PositionAssignmentIndexUI } from './index/positionAssignment.index';
import { PositionAssignment_ModuleFunc } from './positionAssignment.module.func';
import { PositionAssignment_ModuleMaster } from './positionAssignment.module.master';


import { PositionAssignmentRepeal_ModuleFunc } from '../PositionAssignmentRepeal/positionAssignmentRepeal.module.func';
import { PositionAssignmentRepeal_ModuleMaster } from '../PositionAssignmentRepeal/positionAssignmentRepeal.module.master';

@NgModule({
  declarations: [
    PositionAssignmentIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    PositionAssignment_ModuleMaster,
		PositionAssignmentRepeal_ModuleMaster,
  ],
  exports: [
    PositionAssignmentIndexUI,
		PositionAssignment_ModuleMaster,
   ]
})
export class PositionAssignmentModule {}