
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DevelopmentPlanTypeService } from './developmentPlanType.service';
import { DevelopmentPlanTypeServiceCollection } from './developmentPlanType.service.collection';



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
    //DevelopmentPlanTypeService,
    //DevelopmentPlanTypeServiceCollection
  ]
})
export class DevelopmentPlanType_ModuleDetail { }