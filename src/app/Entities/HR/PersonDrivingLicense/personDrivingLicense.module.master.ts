import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PersonDrivingLicenseService } from './personDrivingLicense.service';
import { PersonDrivingLicenseServiceCollection } from './personDrivingLicense.service.collection';
import { PersonDrivingLicenseMasterUI } from './master/personDrivingLicense.master';
import { PersonDrivingLicense_ModuleDetail } from './personDrivingLicense.module.detail';

@NgModule({
    declarations: [
        PersonDrivingLicenseMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        PersonDrivingLicense_ModuleDetail
    ],
    exports: [
        PersonDrivingLicenseMasterUI
    ],
    providers: [
        //PersonDrivingLicenseService,
       // PersonDrivingLicenseServiceCollection   
    ]
})

export class PersonDrivingLicense_ModuleMaster { }