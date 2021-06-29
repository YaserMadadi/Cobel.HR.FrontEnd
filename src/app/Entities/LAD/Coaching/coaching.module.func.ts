import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CoachingService } from './coaching.service';
import { CoachingServiceCollection } from './coaching.service.collection';
import { CoachingMasterUI } from './master/coaching.master';
import { CoachingEditUI } from './edit/coaching.edit';
import { CoachingDeleteUI } from './delete/coaching.delete';
import { CoachingSeekUI } from './seek/coaching.seek';

import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { Coach_ModuleFunc } from '../Coach/coach.module.func';

@NgModule({
    declarations: [
        CoachingEditUI,
		CoachingDeleteUI,
		CoachingSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc,
		Coach_ModuleFunc
    ],
    exports: [
        CoachingEditUI,
		CoachingDeleteUI,
		CoachingSeekUI
    ],
    providers: [
       //CoachingService,
       // CoachingServiceCollection,
    ]
})

export class Coaching_ModuleFunc { }