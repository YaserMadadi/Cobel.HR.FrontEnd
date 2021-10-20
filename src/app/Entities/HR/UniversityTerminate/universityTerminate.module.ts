import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { UniversityTerminateService } from './universityTerminate.service';
import { UniversityTerminateServiceCollection } from './universityTerminate.service.collection';

import { UniversityTerminateIndexUI } from './index/universityTerminate.index';
import { UniversityTerminate_ModuleFunc } from './universityTerminate.module.func';
import { UniversityTerminate_ModuleMaster } from './universityTerminate.module.master';



@NgModule({
  declarations: [
    UniversityTerminateIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    UniversityTerminate_ModuleMaster,
  ],
  exports: [
    UniversityTerminateIndexUI,
		UniversityTerminate_ModuleMaster,
   ]
})
export class UniversityTerminateModule {}