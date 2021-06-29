import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { FieldOfStudyService } from './fieldOfStudy.service';
import { FieldOfStudyServiceCollection } from './fieldOfStudy.service.collection';

import { FieldOfStudyIndexUI } from './index/fieldOfStudy.index';
import { FieldOfStudy_ModuleFunc } from './fieldOfStudy.module.func';
import { FieldOfStudy_ModuleMaster } from './fieldOfStudy.module.master';


import { UniversityHistory_ModuleFunc } from '../../HR/UniversityHistory/universityHistory.module.func';
import { UniversityHistory_ModuleMaster } from '../../HR/UniversityHistory/universityHistory.module.master';

@NgModule({
  declarations: [
    FieldOfStudyIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    FieldOfStudy_ModuleMaster,
		UniversityHistory_ModuleMaster,
  ],
  exports: [
    FieldOfStudyIndexUI,
		FieldOfStudy_ModuleMaster,
  ],
  providers: [
    // FieldOfStudyService,
    // FieldOfStudyServiceCollection
  ]
})
export class FieldOfStudyModule {}