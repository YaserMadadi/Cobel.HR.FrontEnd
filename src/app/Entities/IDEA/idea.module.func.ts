import { NgModule } from '@angular/core';

import { Course_ModuleFunc } from './Course/course.module.func';
import { Training_ModuleFunc } from './Training/training.module.func';


@NgModule({
  declarations: [],
  imports: [
    Course_ModuleFunc,
		Training_ModuleFunc,
		
  ],
  exports: [
    Course_ModuleFunc,
		Training_ModuleFunc,
		
  ]
})
export class IDEA_ModuleFunc { }