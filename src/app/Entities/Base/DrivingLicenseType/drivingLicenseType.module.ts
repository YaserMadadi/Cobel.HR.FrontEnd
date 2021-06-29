import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { DrivingLicenseTypeService } from './drivingLicenseType.service';
import { DrivingLicenseTypeServiceCollection } from './drivingLicenseType.service.collection';

import { DrivingLicenseTypeIndexUI } from './index/drivingLicenseType.index';
import { DrivingLicenseType_ModuleFunc } from './drivingLicenseType.module.func';
import { DrivingLicenseType_ModuleMaster } from './drivingLicenseType.module.master';


import { PersonDrivingLicense_ModuleFunc } from '../../HR/PersonDrivingLicense/personDrivingLicense.module.func';
import { PersonDrivingLicense_ModuleMaster } from '../../HR/PersonDrivingLicense/personDrivingLicense.module.master';

@NgModule({
  declarations: [
    DrivingLicenseTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    DrivingLicenseType_ModuleMaster,
		PersonDrivingLicense_ModuleMaster,
  ],
  exports: [
    DrivingLicenseTypeIndexUI,
		DrivingLicenseType_ModuleMaster,
  ],
  providers: [
    // DrivingLicenseTypeService,
    // DrivingLicenseTypeServiceCollection
  ]
})
export class DrivingLicenseTypeModule {}