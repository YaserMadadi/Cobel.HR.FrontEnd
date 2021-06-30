﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DevelopmentGoalService } from './developmentGoal.service';
import { DevelopmentGoalServiceCollection } from './developmentGoal.service.collection';



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
    //DevelopmentGoalService,
    //DevelopmentGoalServiceCollection
  ]
})
export class DevelopmentGoal_ModuleDetail { }