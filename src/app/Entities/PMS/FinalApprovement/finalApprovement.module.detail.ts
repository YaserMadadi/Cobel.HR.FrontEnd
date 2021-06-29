import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FinalApprovementService } from './finalApprovement.service';
import { FinalApprovementServiceCollection } from './finalApprovement.service.collection';



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
    //FinalApprovementService,
    //FinalApprovementServiceCollection
  ]
})
export class FinalApprovement_ModuleDetail { }