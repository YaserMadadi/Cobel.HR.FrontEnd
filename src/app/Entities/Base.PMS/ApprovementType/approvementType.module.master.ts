import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ApprovementTypeService } from './approvementType.service';
import { ApprovementTypeServiceCollection } from './approvementType.service.collection';
import { ApprovementTypeMasterUI } from './master/approvementType.master';
import { ApprovementType_ModuleDetail } from './approvementType.module.detail';

@NgModule({
    declarations: [
        ApprovementTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ApprovementType_ModuleDetail
    ],
    exports: [
        ApprovementTypeMasterUI
    ],
    providers: [
        //ApprovementTypeService,
       // ApprovementTypeServiceCollection   
    ]
})

export class ApprovementType_ModuleMaster { }