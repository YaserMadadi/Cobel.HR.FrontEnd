import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Course } from '../course';


@Component({
  selector: 'idea-course-seek',
  templateUrl: './course.seek.html',
  styleUrls: ['./course.seek.css']
})
export class CourseSeekUI extends SeekModal<Course> {

  course: Course = new Course();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.course);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}