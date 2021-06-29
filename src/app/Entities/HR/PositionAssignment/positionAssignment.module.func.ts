import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PositionAssignmentService } from './positionAssignment.service';
import { PositionAssignmentServiceCollection } from './positionAssignment.service.collection';
import { PositionAssignmentMasterUI } from './master/positionAssignment.master';
import { PositionAssignmentEditUI } from './edit/positionAssignment.edit';
import { PositionAssignmentDeleteUI } from './delete/positionAssignment.delete';
import { PositionAssignmentSeekUI } from './seek/positionAssignment.seek';

import { Employee_ModuleFunc } from '../Employee/employee.module.func';
import { Position_ModuleFunc } from '../Position/position.module.func';

@NgModule({
    declarations: [
        PositionAssignmentEditUI,
		PositionAssignmentDeleteUI,
		PositionAssignmentSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc,
		Position_ModuleFunc
    ],
    exports: [
        PositionAssignmentEditUI,
		PositionAssignmentDeleteUI,
		PositionAssignmentSeekUI
    ],
    providers: [
       //PositionAssignmentService,
       // PositionAssignmentServiceCollection,
    ]
})

export class PositionAssignment_ModuleFunc { }