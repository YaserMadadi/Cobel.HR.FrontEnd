import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { SubjectService } from './subject.service';
import { SubjectServiceCollection } from './subject.service.collection';

import { SubjectIndexUI } from './index/subject.index';
import { Subject_ModuleFunc } from './subject.module.func';
import { Subject_ModuleMaster } from './subject.module.master';


import { IndividualDevelopmentPlan_ModuleFunc } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.func';
import { IndividualDevelopmentPlan_ModuleMaster } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.master';

@NgModule({
  declarations: [
    SubjectIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Subject_ModuleMaster,
		IndividualDevelopmentPlan_ModuleMaster,
  ],
  exports: [
    SubjectIndexUI,
		Subject_ModuleMaster,
   ]
})
export class SubjectModule {}