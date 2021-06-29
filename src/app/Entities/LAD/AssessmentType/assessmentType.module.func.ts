import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { AssessmentTypeService } from './assessmentType.service';
import { AssessmentTypeServiceCollection } from './assessmentType.service.collection';
import { AssessmentTypeMasterUI } from './master/assessmentType.master';
import { AssessmentTypeEditUI } from './edit/assessmentType.edit';
import { AssessmentTypeDeleteUI } from './delete/assessmentType.delete';
import { AssessmentTypeSeekUI } from './seek/assessmentType.seek';


@NgModule({
    declarations: [
        AssessmentTypeEditUI,
		AssessmentTypeDeleteUI,
		AssessmentTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        AssessmentTypeEditUI,
		AssessmentTypeDeleteUI,
		AssessmentTypeSeekUI
    ],
    providers: [
       //AssessmentTypeService,
       // AssessmentTypeServiceCollection,
    ]
})

export class AssessmentType_ModuleFunc { }