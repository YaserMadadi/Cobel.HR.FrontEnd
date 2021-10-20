import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessmentService } from './assessment.service';
import { AssessmentServiceCollection } from './assessment.service.collection';
import { AssessmentMasterUI } from './master/assessment.master';
import { Assessment_ModuleDetail } from './assessment.module.detail';

@NgModule({
    declarations: [
        AssessmentMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Assessment_ModuleDetail
    ],
    exports: [
        AssessmentMasterUI
    ]
})

export class Assessment_ModuleMaster { }