import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { VisionService } from './vision.service';
import { VisionServiceCollection } from './vision.service.collection';
import { VisionMasterUI } from './master/vision.master';
import { VisionEditUI } from './edit/vision.edit';
import { VisionDeleteUI } from './delete/vision.delete';
import { VisionSeekUI } from './seek/vision.seek';

import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';

@NgModule({
    declarations: [
        VisionEditUI,
		VisionDeleteUI,
		VisionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc
    ],
    exports: [
        VisionEditUI,
		VisionDeleteUI,
		VisionSeekUI
    ],
    providers: [
       //VisionService,
       // VisionServiceCollection,
    ]
})

export class Vision_ModuleFunc { }