import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { DevelopmentGoalService } from './developmentGoal.service';
import { DevelopmentGoalServiceCollection } from './developmentGoal.service.collection';

import { DevelopmentGoalIndexUI } from './index/developmentGoal.index';
import { DevelopmentGoal_ModuleFunc } from './developmentGoal.module.func';
import { DevelopmentGoal_ModuleMaster } from './developmentGoal.module.master';



@NgModule({
  declarations: [
    DevelopmentGoalIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    DevelopmentGoal_ModuleMaster,
  ],
  exports: [
    DevelopmentGoalIndexUI,
		DevelopmentGoal_ModuleMaster,
  ],
  providers: [
    // DevelopmentGoalService,
    // DevelopmentGoalServiceCollection
  ]
})
export class DevelopmentGoalModule {}