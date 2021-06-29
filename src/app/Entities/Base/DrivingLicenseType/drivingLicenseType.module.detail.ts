import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DrivingLicenseTypeService } from './drivingLicenseType.service';
import { DrivingLicenseTypeServiceCollection } from './drivingLicenseType.service.collection';


import { DrivingLicenseType_PersonDrivingLicense_DetailUI } from './detail/drivingLicenseType-personDrivingLicense.detail';
import { PersonDrivingLicense_ModuleMaster } from '../../HR/PersonDrivingLicense/personDrivingLicense.module.master';

@NgModule({
  declarations: [
    DrivingLicenseType_PersonDrivingLicense_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		PersonDrivingLicense_ModuleMaster,
  ],
  exports: [
    DrivingLicenseType_PersonDrivingLicense_DetailUI
  ],
  providers: [
    //DrivingLicenseTypeService,
    //DrivingLicenseTypeServiceCollection
  ]
})
export class DrivingLicenseType_ModuleDetail { }