import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ContractTypeService } from './contractType.service';
import { ContractTypeServiceCollection } from './contractType.service.collection';
import { ContractTypeMasterUI } from './master/contractType.master';
import { ContractType_ModuleDetail } from './contractType.module.detail';

@NgModule({
    declarations: [
        ContractTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ContractType_ModuleDetail
    ],
    exports: [
        ContractTypeMasterUI
    ]
})

export class ContractType_ModuleMaster { }