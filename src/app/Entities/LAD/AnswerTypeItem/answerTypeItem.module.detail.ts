import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AnswerTypeItemService } from './answerTypeItem.service';
import { AnswerTypeItemServiceCollection } from './answerTypeItem.service.collection';



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
    //AnswerTypeItemService,
    //AnswerTypeItemServiceCollection
  ]
})
export class AnswerTypeItem_ModuleDetail { }