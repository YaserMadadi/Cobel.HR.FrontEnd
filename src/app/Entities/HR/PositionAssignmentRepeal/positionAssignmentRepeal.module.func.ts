import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PositionAssignmentRepealService } from './positionAssignmentRepeal.service';
import { PositionAssignmentRepealServiceCollection } from './positionAssignmentRepeal.service.collection';
import { PositionAssignmentRepealMasterUI } from './master/positionAssignmentRepeal.master';
import { PositionAssignmentRepealEditUI } from './edit/positionAssignmentRepeal.edit';
import { PositionAssignmentRepealDeleteUI } from './delete/positionAssignmentRepeal.delete';
import { PositionAssignmentRepealSeekUI } from './seek/positionAssignmentRepeal.seek';

import { PositionAssignment_ModuleFunc } from '../PositionAssignment/positionAssignment.module.func';

@NgModule({
    declarations: [
        PositionAssignmentRepealEditUI,
		PositionAssignmentRepealDeleteUI,
		PositionAssignmentRepealSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        PositionAssignment_ModuleFunc
    ],
    exports: [
        PositionAssignmentRepealEditUI,
		PositionAssignmentRepealDeleteUI,
		PositionAssignmentRepealSeekUI
    ],
    providers: [
       //PositionAssignmentRepealService,
       // PositionAssignmentRepealServiceCollection,
    ]
})

export class PositionAssignmentRepeal_ModuleFunc { }