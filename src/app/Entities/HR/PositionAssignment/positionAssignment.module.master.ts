import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PositionAssignmentService } from './positionAssignment.service';
import { PositionAssignmentServiceCollection } from './positionAssignment.service.collection';
import { PositionAssignmentMasterUI } from './master/positionAssignment.master';
import { PositionAssignment_ModuleDetail } from './positionAssignment.module.detail';

@NgModule({
    declarations: [
        PositionAssignmentMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        PositionAssignment_ModuleDetail
    ],
    exports: [
        PositionAssignmentMasterUI
    ],
    providers: [
        //PositionAssignmentService,
       // PositionAssignmentServiceCollection   
    ]
})

export class PositionAssignment_ModuleMaster { }