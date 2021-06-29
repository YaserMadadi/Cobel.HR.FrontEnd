import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { UniversityTerminateService } from './universityTerminate.service';
import { UniversityTerminateServiceCollection } from './universityTerminate.service.collection';
import { UniversityTerminateMasterUI } from './master/universityTerminate.master';
import { UniversityTerminateEditUI } from './edit/universityTerminate.edit';
import { UniversityTerminateDeleteUI } from './delete/universityTerminate.delete';
import { UniversityTerminateSeekUI } from './seek/universityTerminate.seek';

import { UniversityHistory_ModuleFunc } from '../UniversityHistory/universityHistory.module.func';

@NgModule({
    declarations: [
        UniversityTerminateEditUI,
		UniversityTerminateDeleteUI,
		UniversityTerminateSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        UniversityHistory_ModuleFunc
    ],
    exports: [
        UniversityTerminateEditUI,
		UniversityTerminateDeleteUI,
		UniversityTerminateSeekUI
    ],
    providers: [
       //UniversityTerminateService,
       // UniversityTerminateServiceCollection,
    ]
})

export class UniversityTerminate_ModuleFunc { }