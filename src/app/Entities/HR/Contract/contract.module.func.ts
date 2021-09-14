import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ContractService } from './contract.service';
import { ContractServiceCollection } from './contract.service.collection';
import { ContractMasterUI } from './master/contract.master';
import { ContractEditUI } from './edit/contract.edit';
import { ContractDeleteUI } from './delete/contract.delete';
import { ContractSeekUI } from './seek/contract.seek';

import { Employee_ModuleFunc } from '../Employee/employee.module.func';
import { ContractType_ModuleFunc } from '../../Base.HR/ContractType/contractType.module.func';

@NgModule({
    declarations: [
        ContractEditUI,
		ContractDeleteUI,
		ContractSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc,
		ContractType_ModuleFunc
    ],
    exports: [
        ContractEditUI,
		ContractDeleteUI,
		ContractSeekUI
    ]
})

export class Contract_ModuleFunc { }