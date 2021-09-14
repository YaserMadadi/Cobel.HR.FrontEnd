import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EducationSystemService } from './educationSystem.service';
import { EducationSystemServiceCollection } from './educationSystem.service.collection';
import { EducationSystemMasterUI } from './master/educationSystem.master';
import { EducationSystem_ModuleDetail } from './educationSystem.module.detail';

@NgModule({
    declarations: [
        EducationSystemMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        EducationSystem_ModuleDetail
    ],
    exports: [
        EducationSystemMasterUI
    ]
})

export class EducationSystem_ModuleMaster { }