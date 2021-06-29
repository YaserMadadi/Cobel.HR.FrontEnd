import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { EducationSystemService } from './educationSystem.service';
import { EducationSystemServiceCollection } from './educationSystem.service.collection';

import { EducationSystemIndexUI } from './index/educationSystem.index';
import { EducationSystem_ModuleFunc } from './educationSystem.module.func';
import { EducationSystem_ModuleMaster } from './educationSystem.module.master';


import { UniversityHistory_ModuleFunc } from '../../HR/UniversityHistory/universityHistory.module.func';
import { UniversityHistory_ModuleMaster } from '../../HR/UniversityHistory/universityHistory.module.master';

@NgModule({
  declarations: [
    EducationSystemIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    EducationSystem_ModuleMaster,
		UniversityHistory_ModuleMaster,
  ],
  exports: [
    EducationSystemIndexUI,
		EducationSystem_ModuleMaster,
  ],
  providers: [
    // EducationSystemService,
    // EducationSystemServiceCollection
  ]
})
export class EducationSystemModule {}