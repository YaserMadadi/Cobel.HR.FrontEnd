import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AssessmentService } from './assessment.service';
import { AssessmentServiceCollection } from './assessment.service.collection';
import { AssessmentMasterUI } from './master/assessment.master';
import { AssessmentEditUI } from './edit/assessment.edit';
import { AssessmentDeleteUI } from './delete/assessment.delete';
import { AssessmentSeekUI } from './seek/assessment.seek';

import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { AssessmentType_ModuleFunc } from '../AssessmentType/assessmentType.module.func';
import { Assessor_ModuleFunc } from '../Assessor/assessor.module.func';

@NgModule({
    declarations: [
        AssessmentEditUI,
		AssessmentDeleteUI,
		AssessmentSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc,
		AssessmentType_ModuleFunc,
		Assessor_ModuleFunc
    ],
    exports: [
        AssessmentEditUI,
		AssessmentDeleteUI,
		AssessmentSeekUI
    ]
})

export class Assessment_ModuleFunc { }