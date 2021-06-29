import {NgModule} from '@angular/core';

import { CourseModule } from './Course/course.module';
import { TrainingModule } from './Training/training.module';
import { IDEA_RouteModule } from './idea.route.module';

@NgModule({
  declarations: [],
  imports: [
    CourseModule,
		TrainingModule,
		IDEA_RouteModule
  ],
  exports: [
    CourseModule,
		TrainingModule,
		IDEA_RouteModule
  ]
})
export class IDEA_Module { }