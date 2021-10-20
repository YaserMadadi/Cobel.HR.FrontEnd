import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UniversityTerminateService } from './universityTerminate.service';
import { UniversityTerminateServiceCollection } from './universityTerminate.service.collection';
import { UniversityTerminateMasterUI } from './master/universityTerminate.master';
import { UniversityTerminate_ModuleDetail } from './universityTerminate.module.detail';

@NgModule({
    declarations: [
        UniversityTerminateMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        UniversityTerminate_ModuleDetail
    ],
    exports: [
        UniversityTerminateMasterUI
    ]
})

export class UniversityTerminate_ModuleMaster { }