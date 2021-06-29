import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FunctionalObjectiveCommentService } from './functionalObjectiveComment.service';
import { FunctionalObjectiveCommentServiceCollection } from './functionalObjectiveComment.service.collection';



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
    //FunctionalObjectiveCommentService,
    //FunctionalObjectiveCommentServiceCollection
  ]
})
export class FunctionalObjectiveComment_ModuleDetail { }