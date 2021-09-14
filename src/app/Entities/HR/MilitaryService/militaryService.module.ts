import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { MilitaryServiceService } from './militaryService.service';
import { MilitaryServiceServiceCollection } from './militaryService.service.collection';

import { MilitaryServiceIndexUI } from './index/militaryService.index';
import { MilitaryService_ModuleFunc } from './militaryService.module.func';
import { MilitaryService_ModuleMaster } from './militaryService.module.master';


import { MilitaryServiceExcemption_ModuleFunc } from '../MilitaryServiceExcemption/militaryServiceExcemption.module.func';
import { MilitaryServiceExcemption_ModuleMaster } from '../MilitaryServiceExcemption/militaryServiceExcemption.module.master';
import { MilitaryServiceInclusive_ModuleFunc } from '../MilitaryServiceInclusive/militaryServiceInclusive.module.func';
import { MilitaryServiceInclusive_ModuleMaster } from '../MilitaryServiceInclusive/militaryServiceInclusive.module.master';

@NgModule({
  declarations: [
    MilitaryServiceIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    MilitaryService_ModuleMaster,
		MilitaryServiceExcemption_ModuleMaster,
		MilitaryServiceInclusive_ModuleMaster,
  ],
  exports: [
    MilitaryServiceIndexUI,
		MilitaryService_ModuleMaster,
   ]
})
export class MilitaryServiceModule {}