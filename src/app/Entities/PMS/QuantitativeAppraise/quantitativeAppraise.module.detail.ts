import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QuantitativeAppraiseService } from './quantitativeAppraise.service';
import { QuantitativeAppraiseServiceCollection } from './quantitativeAppraise.service.collection';



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
  
})
export class QuantitativeAppraise_ModuleDetail { }