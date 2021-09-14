import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { GenderService } from './gender.service';
import { GenderServiceCollection } from './gender.service.collection';

import { GenderIndexUI } from './index/gender.index';
import { Gender_ModuleFunc } from './gender.module.func';
import { Gender_ModuleMaster } from './gender.module.master';


import { Assessor_ModuleFunc } from '../../LAD/Assessor/assessor.module.func';
import { Assessor_ModuleMaster } from '../../LAD/Assessor/assessor.module.master';
import { Coach_ModuleFunc } from '../../LAD/Coach/coach.module.func';
import { Coach_ModuleMaster } from '../../LAD/Coach/coach.module.master';
import { Person_ModuleFunc } from '../../HR/Person/person.module.func';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';

@NgModule({
  declarations: [
    GenderIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Gender_ModuleMaster,
		Assessor_ModuleMaster,
		Coach_ModuleMaster,
		Person_ModuleMaster,
  ],
  exports: [
    GenderIndexUI,
		Gender_ModuleMaster,
   ]
})
export class GenderModule {}