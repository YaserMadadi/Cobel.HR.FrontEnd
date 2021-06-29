import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessorConnectionLineService } from './assessorConnectionLine.service';
import { AssessorConnectionLineServiceCollection } from './assessorConnectionLine.service.collection';



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
    //AssessorConnectionLineService,
    //AssessorConnectionLineServiceCollection
  ]
})
export class AssessorConnectionLine_ModuleDetail { }