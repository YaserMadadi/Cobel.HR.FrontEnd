import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PositionAssignmentRepealService } from './positionAssignmentRepeal.service';
import { PositionAssignmentRepealServiceCollection } from './positionAssignmentRepeal.service.collection';

import { PositionAssignmentRepealIndexUI } from './index/positionAssignmentRepeal.index';
import { PositionAssignmentRepeal_ModuleFunc } from './positionAssignmentRepeal.module.func';
import { PositionAssignmentRepeal_ModuleMaster } from './positionAssignmentRepeal.module.master';



@NgModule({
  declarations: [
    PositionAssignmentRepealIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    PositionAssignmentRepeal_ModuleMaster,
  ],
  exports: [
    PositionAssignmentRepealIndexUI,
		PositionAssignmentRepeal_ModuleMaster,
  ],
  providers: [
    // PositionAssignmentRepealService,
    // PositionAssignmentRepealServiceCollection
  ]
})
export class PositionAssignmentRepealModule {}