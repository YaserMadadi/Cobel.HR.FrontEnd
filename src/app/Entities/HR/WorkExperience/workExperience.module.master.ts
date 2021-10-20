import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { WorkExperienceService } from './workExperience.service';
import { WorkExperienceServiceCollection } from './workExperience.service.collection';
import { WorkExperienceMasterUI } from './master/workExperience.master';
import { WorkExperience_ModuleDetail } from './workExperience.module.detail';

@NgModule({
    declarations: [
        WorkExperienceMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        WorkExperience_ModuleDetail
    ],
    exports: [
        WorkExperienceMasterUI
    ]
})

export class WorkExperience_ModuleMaster { }