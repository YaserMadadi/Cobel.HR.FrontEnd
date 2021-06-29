import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CourseService } from './course.service';
import { CourseServiceCollection } from './course.service.collection';

import { CourseIndexUI } from './index/course.index';
import { Course_ModuleFunc } from './course.module.func';
import { Course_ModuleMaster } from './course.module.master';


import { Training_ModuleFunc } from '../Training/training.module.func';
import { Training_ModuleMaster } from '../Training/training.module.master';

@NgModule({
  declarations: [
    CourseIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Course_ModuleMaster,
		Training_ModuleMaster,
  ],
  exports: [
    CourseIndexUI,
		Course_ModuleMaster,
  ],
  providers: [
    // CourseService,
    // CourseServiceCollection
  ]
})
export class CourseModule {}