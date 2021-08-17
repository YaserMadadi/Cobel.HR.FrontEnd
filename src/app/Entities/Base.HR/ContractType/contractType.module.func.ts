import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ContractTypeService } from './contractType.service';
import { ContractTypeServiceCollection } from './contractType.service.collection';
import { ContractTypeMasterUI } from './master/contractType.master';
import { ContractTypeEditUI } from './edit/contractType.edit';
import { ContractTypeDeleteUI } from './delete/contractType.delete';
import { ContractTypeSeekUI } from './seek/contractType.seek';


@NgModule({
    declarations: [
        ContractTypeEditUI,
		ContractTypeDeleteUI,
		ContractTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        ContractTypeEditUI,
		ContractTypeDeleteUI,
		ContractTypeSeekUI
    ],
    providers: [
       //ContractTypeService,
       // ContractTypeServiceCollection,
    ]
})

export class ContractType_ModuleFunc { }
