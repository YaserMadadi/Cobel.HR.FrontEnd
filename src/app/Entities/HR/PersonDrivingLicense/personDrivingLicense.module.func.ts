import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PersonDrivingLicenseService } from './personDrivingLicense.service';
import { PersonDrivingLicenseServiceCollection } from './personDrivingLicense.service.collection';
import { PersonDrivingLicenseMasterUI } from './master/personDrivingLicense.master';
import { PersonDrivingLicenseEditUI } from './edit/personDrivingLicense.edit';
import { PersonDrivingLicenseDeleteUI } from './delete/personDrivingLicense.delete';
import { PersonDrivingLicenseSeekUI } from './seek/personDrivingLicense.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';
import { DrivingLicenseType_ModuleFunc } from '../../Base/DrivingLicenseType/drivingLicenseType.module.func';

@NgModule({
    declarations: [
        PersonDrivingLicenseEditUI,
		PersonDrivingLicenseDeleteUI,
		PersonDrivingLicenseSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc,
		DrivingLicenseType_ModuleFunc
    ],
    exports: [
        PersonDrivingLicenseEditUI,
		PersonDrivingLicenseDeleteUI,
		PersonDrivingLicenseSeekUI
    ],
    providers: [
       //PersonDrivingLicenseService,
       // PersonDrivingLicenseServiceCollection,
    ]
})

export class PersonDrivingLicense_ModuleFunc { }