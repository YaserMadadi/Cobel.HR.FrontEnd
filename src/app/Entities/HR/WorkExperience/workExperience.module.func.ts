import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { WorkExperienceService } from './workExperience.service';
import { WorkExperienceServiceCollection } from './workExperience.service.collection';
import { WorkExperienceMasterUI } from './master/workExperience.master';
import { WorkExperienceEditUI } from './edit/workExperience.edit';
import { WorkExperienceDeleteUI } from './delete/workExperience.delete';
import { WorkExperienceSeekUI } from './seek/workExperience.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';

@NgModule({
    declarations: [
        WorkExperienceEditUI,
		WorkExperienceDeleteUI,
		WorkExperienceSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc
    ],
    exports: [
        WorkExperienceEditUI,
		WorkExperienceDeleteUI,
		WorkExperienceSeekUI
    ]
})

export class WorkExperience_ModuleFunc { }