import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PersonDrivingLicenseService } from './personDrivingLicense.service';
import { PersonDrivingLicenseServiceCollection } from './personDrivingLicense.service.collection';



@NgModule({
  declarations: [
    // No Item...
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    // No Item...
  ],
  providers: [
    //PersonDrivingLicenseService,
    //PersonDrivingLicenseServiceCollection
  ]
})
export class PersonDrivingLicense_ModuleDetail { }