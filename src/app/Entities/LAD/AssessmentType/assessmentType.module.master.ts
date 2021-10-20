import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessmentTypeService } from './assessmentType.service';
import { AssessmentTypeServiceCollection } from './assessmentType.service.collection';
import { AssessmentTypeMasterUI } from './master/assessmentType.master';
import { AssessmentType_ModuleDetail } from './assessmentType.module.detail';

@NgModule({
    declarations: [
        AssessmentTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        AssessmentType_ModuleDetail
    ],
    exports: [
        AssessmentTypeMasterUI
    ]
})

export class AssessmentType_ModuleMaster { }