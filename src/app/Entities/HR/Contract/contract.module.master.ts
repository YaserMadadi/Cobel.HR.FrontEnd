import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ContractService } from './contract.service';
import { ContractServiceCollection } from './contract.service.collection';
import { ContractMasterUI } from './master/contract.master';
import { Contract_ModuleDetail } from './contract.module.detail';

@NgModule({
    declarations: [
        ContractMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Contract_ModuleDetail
    ],
    exports: [
        ContractMasterUI
    ],
    providers: [
        //ContractService,
       // ContractServiceCollection   
    ]
})

export class Contract_ModuleMaster { }