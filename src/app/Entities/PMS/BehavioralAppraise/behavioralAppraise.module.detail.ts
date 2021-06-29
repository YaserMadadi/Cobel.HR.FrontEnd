import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { BehavioralAppraiseService } from './behavioralAppraise.service';
import { BehavioralAppraiseServiceCollection } from './behavioralAppraise.service.collection';



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
    //BehavioralAppraiseService,
    //BehavioralAppraiseServiceCollection
  ]
})
export class BehavioralAppraise_ModuleDetail { }