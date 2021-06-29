import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { UniversityService } from './university.service';
import { UniversityServiceCollection } from './university.service.collection';

import { UniversityIndexUI } from './index/university.index';
import { University_ModuleFunc } from './university.module.func';
import { University_ModuleMaster } from './university.module.master';


import { UniversityHistory_ModuleFunc } from '../../HR/UniversityHistory/universityHistory.module.func';
import { UniversityHistory_ModuleMaster } from '../../HR/UniversityHistory/universityHistory.module.master';

@NgModule({
  declarations: [
    UniversityIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    University_ModuleMaster,
		UniversityHistory_ModuleMaster,
  ],
  exports: [
    UniversityIndexUI,
		University_ModuleMaster,
  ],
  providers: [
    // UniversityService,
    // UniversityServiceCollection
  ]
})
export class UniversityModule {}