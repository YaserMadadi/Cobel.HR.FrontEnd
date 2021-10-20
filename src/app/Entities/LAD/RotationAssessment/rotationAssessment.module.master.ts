import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { RotationAssessmentService } from './rotationAssessment.service';
import { RotationAssessmentServiceCollection } from './rotationAssessment.service.collection';
import { RotationAssessmentMasterUI } from './master/rotationAssessment.master';
import { RotationAssessment_ModuleDetail } from './rotationAssessment.module.detail';

@NgModule({
    declarations: [
        RotationAssessmentMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        RotationAssessment_ModuleDetail
    ],
    exports: [
        RotationAssessmentMasterUI
    ]
})

export class RotationAssessment_ModuleMaster { }