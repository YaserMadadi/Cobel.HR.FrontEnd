import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ExcemptionTypeService } from './excemptionType.service';
import { ExcemptionTypeServiceCollection } from './excemptionType.service.collection';

import { ExcemptionTypeIndexUI } from './index/excemptionType.index';
import { ExcemptionType_ModuleFunc } from './excemptionType.module.func';
import { ExcemptionType_ModuleMaster } from './excemptionType.module.master';


import { MilitaryServiceExcemption_ModuleFunc } from '../../HR/MilitaryServiceExcemption/militaryServiceExcemption.module.func';
import { MilitaryServiceExcemption_ModuleMaster } from '../../HR/MilitaryServiceExcemption/militaryServiceExcemption.module.master';

@NgModule({
  declarations: [
    ExcemptionTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ExcemptionType_ModuleMaster,
		MilitaryServiceExcemption_ModuleMaster,
  ],
  exports: [
    ExcemptionTypeIndexUI,
		ExcemptionType_ModuleMaster,
  ],
  providers: [
    // ExcemptionTypeService,
    // ExcemptionTypeServiceCollection
  ]
})
export class ExcemptionTypeModule {}