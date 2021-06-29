import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { CourseService } from './course.service';
import { CourseServiceCollection } from './course.service.collection';
import { CourseMasterUI } from './master/course.master';
import { CourseEditUI } from './edit/course.edit';
import { CourseDeleteUI } from './delete/course.delete';
import { CourseSeekUI } from './seek/course.seek';


@NgModule({
    declarations: [
        CourseEditUI,
		CourseDeleteUI,
		CourseSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        CourseEditUI,
		CourseDeleteUI,
		CourseSeekUI
    ],
    providers: [
       //CourseService,
       // CourseServiceCollection,
    ]
})

export class Course_ModuleFunc { }