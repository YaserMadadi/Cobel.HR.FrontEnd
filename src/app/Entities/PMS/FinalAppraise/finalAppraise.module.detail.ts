import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FinalAppraiseService } from './finalAppraise.service';
import { FinalAppraiseServiceCollection } from './finalAppraise.service.collection';



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
    //FinalAppraiseService,
    //FinalAppraiseServiceCollection
  ]
})
export class FinalAppraise_ModuleDetail { }