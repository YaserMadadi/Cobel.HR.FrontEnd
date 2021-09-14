import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { DrivingLicenseTypeService } from './drivingLicenseType.service';
import { DrivingLicenseTypeServiceCollection } from './drivingLicenseType.service.collection';
import { DrivingLicenseTypeMasterUI } from './master/drivingLicenseType.master';
import { DrivingLicenseTypeEditUI } from './edit/drivingLicenseType.edit';
import { DrivingLicenseTypeDeleteUI } from './delete/drivingLicenseType.delete';
import { DrivingLicenseTypeSeekUI } from './seek/drivingLicenseType.seek';


@NgModule({
    declarations: [
        DrivingLicenseTypeEditUI,
		DrivingLicenseTypeDeleteUI,
		DrivingLicenseTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        DrivingLicenseTypeEditUI,
		DrivingLicenseTypeDeleteUI,
		DrivingLicenseTypeSeekUI
    ]
})

export class DrivingLicenseType_ModuleFunc { }