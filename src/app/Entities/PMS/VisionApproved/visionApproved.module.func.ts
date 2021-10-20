import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { VisionApprovedService } from './visionApproved.service';
import { VisionApprovedServiceCollection } from './visionApproved.service.collection';
import { VisionApprovedMasterUI } from './master/visionApproved.master';
import { VisionApprovedEditUI } from './edit/visionApproved.edit';
import { VisionApprovedDeleteUI } from './delete/visionApproved.delete';
import { VisionApprovedSeekUI } from './seek/visionApproved.seek';

import { Vision_ModuleFunc } from '../Vision/vision.module.func';
import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { ApprovementType_ModuleFunc } from '../../Base.PMS/ApprovementType/approvementType.module.func';

@NgModule({
    declarations: [
        VisionApprovedEditUI,
		VisionApprovedDeleteUI,
		VisionApprovedSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Vision_ModuleFunc,
		Employee_ModuleFunc,
		ApprovementType_ModuleFunc
    ],
    exports: [
        VisionApprovedEditUI,
		VisionApprovedDeleteUI,
		VisionApprovedSeekUI
    ]
})

export class VisionApproved_ModuleFunc { }