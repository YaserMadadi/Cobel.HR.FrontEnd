import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { VisionCommentService } from './visionComment.service';
import { VisionCommentServiceCollection } from './visionComment.service.collection';
import { VisionCommentMasterUI } from './master/visionComment.master';
import { VisionCommentEditUI } from './edit/visionComment.edit';
import { VisionCommentDeleteUI } from './delete/visionComment.delete';
import { VisionCommentSeekUI } from './seek/visionComment.seek';

import { Vision_ModuleFunc } from '../Vision/vision.module.func';
import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';

@NgModule({
    declarations: [
        VisionCommentEditUI,
		VisionCommentDeleteUI,
		VisionCommentSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Vision_ModuleFunc,
		Employee_ModuleFunc
    ],
    exports: [
        VisionCommentEditUI,
		VisionCommentDeleteUI,
		VisionCommentSeekUI
    ]
})

export class VisionComment_ModuleFunc { }