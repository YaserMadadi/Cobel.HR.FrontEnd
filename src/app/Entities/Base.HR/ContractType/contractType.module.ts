import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ContractTypeService } from './contractType.service';
import { ContractTypeServiceCollection } from './contractType.service.collection';

import { ContractTypeIndexUI } from './index/contractType.index';
import { ContractType_ModuleFunc } from './contractType.module.func';
import { ContractType_ModuleMaster } from './contractType.module.master';


import { Contract_ModuleFunc } from '../../HR/Contract/contract.module.func';
import { Contract_ModuleMaster } from '../../HR/Contract/contract.module.master';

@NgModule({
  declarations: [
    ContractTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ContractType_ModuleMaster,
		Contract_ModuleMaster,
  ],
  exports: [
    ContractTypeIndexUI,
		ContractType_ModuleMaster,
  ],
  providers: [
    // ContractTypeService,
    // ContractTypeServiceCollection
  ]
})
export class ContractTypeModule {}