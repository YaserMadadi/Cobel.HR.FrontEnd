import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Course } from '../course';
import { CourseService } from '../course.service';


@Component({
  selector: 'idea-course-delete',
  templateUrl: './course.delete.html',
  styleUrls: ['./course.delete.css'],
  
})
export class CourseDeleteUI extends DeleteModal<Course> {

    constructor(private courseService: CourseService){
        super(courseService);
    }

}