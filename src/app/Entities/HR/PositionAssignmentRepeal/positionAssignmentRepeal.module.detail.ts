import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PositionAssignmentRepealService } from './positionAssignmentRepeal.service';
import { PositionAssignmentRepealServiceCollection } from './positionAssignmentRepeal.service.collection';



@NgModule({
  declarations: [
    // No Item...
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    // No Item...
  ],
  providers: [
    //PositionAssignmentRepealService,
    //PositionAssignmentRepealServiceCollection
  ]
})
export class PositionAssignmentRepeal_ModuleDetail { }