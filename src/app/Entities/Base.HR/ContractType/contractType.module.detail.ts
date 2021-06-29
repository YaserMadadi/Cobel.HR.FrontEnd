import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ContractTypeService } from './contractType.service';
import { ContractTypeServiceCollection } from './contractType.service.collection';


import { ContractType_Contract_DetailUI } from './detail/contractType-contract.detail';
import { Contract_ModuleMaster } from '../../HR/Contract/contract.module.master';

@NgModule({
  declarations: [
    ContractType_Contract_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Contract_ModuleMaster,
  ],
  exports: [
    ContractType_Contract_DetailUI
  ],
  providers: [
    //ContractTypeService,
    //ContractTypeServiceCollection
  ]
})
export class ContractType_ModuleDetail { }