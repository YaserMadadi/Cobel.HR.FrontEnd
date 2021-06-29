import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ContractService } from './contract.service';
import { ContractServiceCollection } from './contract.service.collection';

import { ContractIndexUI } from './index/contract.index';
import { Contract_ModuleFunc } from './contract.module.func';
import { Contract_ModuleMaster } from './contract.module.master';



@NgModule({
  declarations: [
    ContractIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Contract_ModuleMaster,
  ],
  exports: [
    ContractIndexUI,
		Contract_ModuleMaster,
  ],
  providers: [
    // ContractService,
    // ContractServiceCollection
  ]
})
export class ContractModule {}