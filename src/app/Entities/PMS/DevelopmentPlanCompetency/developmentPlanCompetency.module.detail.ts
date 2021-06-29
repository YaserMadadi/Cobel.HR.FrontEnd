import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DevelopmentPlanCompetencyService } from './developmentPlanCompetency.service';
import { DevelopmentPlanCompetencyServiceCollection } from './developmentPlanCompetency.service.collection';



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
    //DevelopmentPlanCompetencyService,
    //DevelopmentPlanCompetencyServiceCollection
  ]
})
export class DevelopmentPlanCompetency_ModuleDetail { }