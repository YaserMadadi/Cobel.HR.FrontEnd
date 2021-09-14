import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PersonDrivingLicenseService } from './personDrivingLicense.service';
import { PersonDrivingLicenseServiceCollection } from './personDrivingLicense.service.collection';

import { PersonDrivingLicenseIndexUI } from './index/personDrivingLicense.index';
import { PersonDrivingLicense_ModuleFunc } from './personDrivingLicense.module.func';
import { PersonDrivingLicense_ModuleMaster } from './personDrivingLicense.module.master';



@NgModule({
  declarations: [
    PersonDrivingLicenseIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    PersonDrivingLicense_ModuleMaster,
  ],
  exports: [
    PersonDrivingLicenseIndexUI,
		PersonDrivingLicense_ModuleMaster,
   ]
})
export class PersonDrivingLicenseModule {}