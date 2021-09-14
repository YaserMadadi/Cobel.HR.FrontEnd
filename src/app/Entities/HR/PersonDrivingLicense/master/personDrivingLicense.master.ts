import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PersonDrivingLicense } from '../personDrivingLicense';
import { PersonDrivingLicenseService } from '../personDrivingLicense.service';
import { PersonDrivingLicenseDeleteUI } from '../delete/personDrivingLicense.delete';
import { PersonDrivingLicenseEditUI } from '../edit/personDrivingLicense.edit';



@Component({
  selector: 'hr-personDrivingLicense-master',
  templateUrl: './personDrivingLicense.master.html',
  styleUrls: ['./personDrivingLicense.master.css']
})
export class PersonDrivingLicenseMasterUI extends MasterModal<PersonDrivingLicense> {

  constructor(private personDrivingLicenseService: PersonDrivingLicenseService) {
    super(personDrivingLicenseService);
  }
}