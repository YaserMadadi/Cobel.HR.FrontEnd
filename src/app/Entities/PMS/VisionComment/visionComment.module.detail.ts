﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { VisionCommentService } from './visionComment.service';
import { VisionCommentServiceCollection } from './visionComment.service.collection';



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
    //VisionCommentService,
    //VisionCommentServiceCollection
  ]
})
export class VisionComment_ModuleDetail { }