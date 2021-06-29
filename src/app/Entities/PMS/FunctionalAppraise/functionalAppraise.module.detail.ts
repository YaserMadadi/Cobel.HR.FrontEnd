import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FunctionalAppraiseService } from './functionalAppraise.service';
import { FunctionalAppraiseServiceCollection } from './functionalAppraise.service.collection';



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
    //FunctionalAppraiseService,
    //FunctionalAppraiseServiceCollection
  ]
})
export class FunctionalAppraise_ModuleDetail { }