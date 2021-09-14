import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { MilitaryServiceStatusService } from './militaryServiceStatus.service';
import { MilitaryServiceStatusServiceCollection } from './militaryServiceStatus.service.collection';

import { MilitaryServiceStatusIndexUI } from './index/militaryServiceStatus.index';
import { MilitaryServiceStatus_ModuleFunc } from './militaryServiceStatus.module.func';
import { MilitaryServiceStatus_ModuleMaster } from './militaryServiceStatus.module.master';


import { MilitaryService_ModuleFunc } from '../../HR/MilitaryService/militaryService.module.func';
import { MilitaryService_ModuleMaster } from '../../HR/MilitaryService/militaryService.module.master';

@NgModule({
  declarations: [
    MilitaryServiceStatusIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    MilitaryServiceStatus_ModuleMaster,
		MilitaryService_ModuleMaster,
  ],
  exports: [
    MilitaryServiceStatusIndexUI,
		MilitaryServiceStatus_ModuleMaster,
   ]
})
export class MilitaryServiceStatusModule {}