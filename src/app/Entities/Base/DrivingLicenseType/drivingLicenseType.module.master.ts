import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DrivingLicenseTypeService } from './drivingLicenseType.service';
import { DrivingLicenseTypeServiceCollection } from './drivingLicenseType.service.collection';
import { DrivingLicenseTypeMasterUI } from './master/drivingLicenseType.master';
import { DrivingLicenseType_ModuleDetail } from './drivingLicenseType.module.detail';

@NgModule({
    declarations: [
        DrivingLicenseTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        DrivingLicenseType_ModuleDetail
    ],
    exports: [
        DrivingLicenseTypeMasterUI
    ]
})

export class DrivingLicenseType_ModuleMaster { }