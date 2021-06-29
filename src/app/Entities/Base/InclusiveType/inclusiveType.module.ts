import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { InclusiveTypeService } from './inclusiveType.service';
import { InclusiveTypeServiceCollection } from './inclusiveType.service.collection';

import { InclusiveTypeIndexUI } from './index/inclusiveType.index';
import { InclusiveType_ModuleFunc } from './inclusiveType.module.func';
import { InclusiveType_ModuleMaster } from './inclusiveType.module.master';


import { MilitaryServiceInclusive_ModuleFunc } from '../../HR/MilitaryServiceInclusive/militaryServiceInclusive.module.func';
import { MilitaryServiceInclusive_ModuleMaster } from '../../HR/MilitaryServiceInclusive/militaryServiceInclusive.module.master';

@NgModule({
  declarations: [
    InclusiveTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    InclusiveType_ModuleMaster,
		MilitaryServiceInclusive_ModuleMaster,
  ],
  exports: [
    InclusiveTypeIndexUI,
		InclusiveType_ModuleMaster,
  ],
  providers: [
    // InclusiveTypeService,
    // InclusiveTypeServiceCollection
  ]
})
export class InclusiveTypeModule {}