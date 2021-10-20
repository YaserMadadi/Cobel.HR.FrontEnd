import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { WorkExperienceService } from './workExperience.service';
import { WorkExperienceServiceCollection } from './workExperience.service.collection';

import { WorkExperienceIndexUI } from './index/workExperience.index';
import { WorkExperience_ModuleFunc } from './workExperience.module.func';
import { WorkExperience_ModuleMaster } from './workExperience.module.master';



@NgModule({
  declarations: [
    WorkExperienceIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    WorkExperience_ModuleMaster,
  ],
  exports: [
    WorkExperienceIndexUI,
		WorkExperience_ModuleMaster,
   ]
})
export class WorkExperienceModule {}