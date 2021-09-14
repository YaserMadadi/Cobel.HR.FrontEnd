import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UniversityService } from './university.service';
import { UniversityServiceCollection } from './university.service.collection';
import { UniversityMasterUI } from './master/university.master';
import { University_ModuleDetail } from './university.module.detail';

@NgModule({
    declarations: [
        UniversityMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        University_ModuleDetail
    ],
    exports: [
        UniversityMasterUI
    ]
})

export class University_ModuleMaster { }