import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PositionAssignmentService } from './positionAssignment.service';
import { PositionAssignmentServiceCollection } from './positionAssignment.service.collection';


import { PositionAssignment_PositionAssignmentRepeal_DetailUI } from './detail/positionAssignment-positionAssignmentRepeal.detail';
import { PositionAssignmentRepeal_ModuleMaster } from '../PositionAssignmentRepeal/positionAssignmentRepeal.module.master';

@NgModule({
  declarations: [
    PositionAssignment_PositionAssignmentRepeal_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		PositionAssignmentRepeal_ModuleMaster,
  ],
  exports: [
    PositionAssignment_PositionAssignmentRepeal_DetailUI
  ],
  
})
export class PositionAssignment_ModuleDetail { }