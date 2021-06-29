import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Course } from '../course';
import { CourseService } from '../course.service';
import { CourseDeleteUI } from '../delete/course.delete';
import { CourseEditUI } from '../edit/course.edit';
import { TrainingService } from '../../Training/training.service';



@Component({
  selector: 'idea-course-master',
  templateUrl: './course.master.html',
  styleUrls: ['./course.master.css'],
  providers: [
    CourseService,
    TrainingService,
  ]
})
export class CourseMasterUI extends MasterModal<Course> {

  constructor(private courseService: CourseService) {
    super(courseService);
  }
}