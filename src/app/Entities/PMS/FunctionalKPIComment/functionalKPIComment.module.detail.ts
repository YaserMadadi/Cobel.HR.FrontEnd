import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FunctionalKPICommentService } from './functionalKPIComment.service';
import { FunctionalKPICommentServiceCollection } from './functionalKPIComment.service.collection';



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
export class FunctionalKPIComment_ModuleDetail { }