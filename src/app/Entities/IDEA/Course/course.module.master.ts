import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CourseService } from './course.service';
import { CourseServiceCollection } from './course.service.collection';
import { CourseMasterUI } from './master/course.master';
import { Course_ModuleDetail } from './course.module.detail';

@NgModule({
    declarations: [
        CourseMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        Course_ModuleDetail
    ],
    exports: [
        CourseMasterUI
    ],
    providers: [
        //CourseService,
       // CourseServiceCollection   
    ]
})

export class Course_ModuleMaster { }