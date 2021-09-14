import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { MilitaryServiceExcemptionService } from './militaryServiceExcemption.service';
import { MilitaryServiceExcemptionServiceCollection } from './militaryServiceExcemption.service.collection';

import { MilitaryServiceExcemptionIndexUI } from './index/militaryServiceExcemption.index';
import { MilitaryServiceExcemption_ModuleFunc } from './militaryServiceExcemption.module.func';
import { MilitaryServiceExcemption_ModuleMaster } from './militaryServiceExcemption.module.master';



@NgModule({
  declarations: [
    MilitaryServiceExcemptionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    MilitaryServiceExcemption_ModuleMaster,
  ],
  exports: [
    MilitaryServiceExcemptionIndexUI,
		MilitaryServiceExcemption_ModuleMaster,
   ]
})
export class MilitaryServiceExcemptionModule {}