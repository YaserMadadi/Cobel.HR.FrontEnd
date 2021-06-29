import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { TrainingService } from './training.service';
import { TrainingServiceCollection } from './training.service.collection';

import { TrainingIndexUI } from './index/training.index';
import { Training_ModuleFunc } from './training.module.func';
import { Training_ModuleMaster } from './training.module.master';



@NgModule({
  declarations: [
    TrainingIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Training_ModuleMaster,
  ],
  exports: [
    TrainingIndexUI,
		Training_ModuleMaster,
  ],
  providers: [
    // TrainingService,
    // TrainingServiceCollection
  ]
})
export class TrainingModule {}