import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { TrainingService } from './training.service';
import { TrainingServiceCollection } from './training.service.collection';
import { TrainingMasterUI } from './master/training.master';
import { TrainingEditUI } from './edit/training.edit';
import { TrainingDeleteUI } from './delete/training.delete';
import { TrainingSeekUI } from './seek/training.seek';

import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { Course_ModuleFunc } from '../Course/course.module.func';

@NgModule({
    declarations: [
        TrainingEditUI,
		TrainingDeleteUI,
		TrainingSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc,
		Course_ModuleFunc
    ],
    exports: [
        TrainingEditUI,
		TrainingDeleteUI,
		TrainingSeekUI
    ]
})

export class Training_ModuleFunc { }