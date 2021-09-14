import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CourseService } from './course.service';
import { CourseServiceCollection } from './course.service.collection';


import { Course_Training_DetailUI } from './detail/course-training.detail';
import { Training_ModuleMaster } from '../Training/training.module.master';

@NgModule({
  declarations: [
    Course_Training_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Training_ModuleMaster,
  ],
  exports: [
    Course_Training_DetailUI
  ],
  
})
export class Course_ModuleDetail { }