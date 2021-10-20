import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { EducationSystemService } from './educationSystem.service';
import { EducationSystemServiceCollection } from './educationSystem.service.collection';
import { EducationSystemMasterUI } from './master/educationSystem.master';
import { EducationSystemEditUI } from './edit/educationSystem.edit';
import { EducationSystemDeleteUI } from './delete/educationSystem.delete';
import { EducationSystemSeekUI } from './seek/educationSystem.seek';


@NgModule({
    declarations: [
        EducationSystemEditUI,
		EducationSystemDeleteUI,
		EducationSystemSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        EducationSystemEditUI,
		EducationSystemDeleteUI,
		EducationSystemSeekUI
    ]
})

export class EducationSystem_ModuleFunc { }