import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { OperationalAppraiseService } from './operationalAppraise.service';
import { OperationalAppraiseServiceCollection } from './operationalAppraise.service.collection';



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
    //OperationalAppraiseService,
    //OperationalAppraiseServiceCollection
  ]
})
export class OperationalAppraise_ModuleDetail { }