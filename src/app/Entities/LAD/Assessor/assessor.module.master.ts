import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessorService } from './assessor.service';
import { AssessorServiceCollection } from './assessor.service.collection';
import { AssessorMasterUI } from './master/assessor.master';
import { Assessor_ModuleDetail } from './assessor.module.detail';

@NgModule({
    declarations: [
        AssessorMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Assessor_ModuleDetail
    ],
    exports: [
        AssessorMasterUI
    ]
})

export class Assessor_ModuleMaster { }