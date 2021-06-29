import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { UniversityDegreeService } from './universityDegree.service';
import { UniversityDegreeServiceCollection } from './universityDegree.service.collection';

import { UniversityDegreeIndexUI } from './index/universityDegree.index';
import { UniversityDegree_ModuleFunc } from './universityDegree.module.func';
import { UniversityDegree_ModuleMaster } from './universityDegree.module.master';


import { UniversityHistory_ModuleFunc } from '../../HR/UniversityHistory/universityHistory.module.func';
import { UniversityHistory_ModuleMaster } from '../../HR/UniversityHistory/universityHistory.module.master';

@NgModule({
  declarations: [
    UniversityDegreeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    UniversityDegree_ModuleMaster,
		UniversityHistory_ModuleMaster,
  ],
  exports: [
    UniversityDegreeIndexUI,
		UniversityDegree_ModuleMaster,
  ],
  providers: [
    // UniversityDegreeService,
    // UniversityDegreeServiceCollection
  ]
})
export class UniversityDegreeModule {}