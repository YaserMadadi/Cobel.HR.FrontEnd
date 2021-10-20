import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { PersonDrivingLicense } from '../personDrivingLicense';
import { PersonDrivingLicenseService } from '../personDrivingLicense.service';


@Component({
  selector: 'hr-personDrivingLicense-delete',
  templateUrl: './personDrivingLicense.delete.html',
  styleUrls: ['./personDrivingLicense.delete.css'],
  
})
export class PersonDrivingLicenseDeleteUI extends DeleteModal<PersonDrivingLicense> {

    constructor(private personDrivingLicenseService: PersonDrivingLicenseService){
        super(personDrivingLicenseService);
    }

}