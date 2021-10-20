import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { RotationAssessmentService } from './rotationAssessment.service';
import { RotationAssessmentServiceCollection } from './rotationAssessment.service.collection';
import { RotationAssessmentMasterUI } from './master/rotationAssessment.master';
import { RotationAssessmentEditUI } from './edit/rotationAssessment.edit';
import { RotationAssessmentDeleteUI } from './delete/rotationAssessment.delete';
import { RotationAssessmentSeekUI } from './seek/rotationAssessment.seek';

import { Assessment_ModuleFunc } from '../Assessment/assessment.module.func';
import { Position_ModuleFunc } from '../../HR/Position/position.module.func';

@NgModule({
    declarations: [
        RotationAssessmentEditUI,
		RotationAssessmentDeleteUI,
		RotationAssessmentSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Assessment_ModuleFunc,
		Position_ModuleFunc,
		Position_ModuleFunc
    ],
    exports: [
        RotationAssessmentEditUI,
		RotationAssessmentDeleteUI,
		RotationAssessmentSeekUI
    ]
})

export class RotationAssessment_ModuleFunc { }