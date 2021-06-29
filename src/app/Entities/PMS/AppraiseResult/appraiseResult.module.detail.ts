import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AppraiseResultService } from './appraiseResult.service';
import { AppraiseResultServiceCollection } from './appraiseResult.service.collection';



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
    //AppraiseResultService,
    //AppraiseResultServiceCollection
  ]
})
export class AppraiseResult_ModuleDetail { }