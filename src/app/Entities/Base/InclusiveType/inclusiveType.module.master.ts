import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { InclusiveTypeService } from './inclusiveType.service';
import { InclusiveTypeServiceCollection } from './inclusiveType.service.collection';
import { InclusiveTypeMasterUI } from './master/inclusiveType.master';
import { InclusiveType_ModuleDetail } from './inclusiveType.module.detail';

@NgModule({
    declarations: [
        InclusiveTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        InclusiveType_ModuleDetail
    ],
    exports: [
        InclusiveTypeMasterUI
    ],
    providers: [
        //InclusiveTypeService,
       // InclusiveTypeServiceCollection   
    ]
})

export class InclusiveType_ModuleMaster { }