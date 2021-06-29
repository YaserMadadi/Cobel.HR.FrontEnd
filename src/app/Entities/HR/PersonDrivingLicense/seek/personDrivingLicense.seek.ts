import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { PersonDrivingLicense } from '../personDrivingLicense';


@Component({
  selector: 'hr-personDrivingLicense-seek',
  templateUrl: './personDrivingLicense.seek.html',
  styleUrls: ['./personDrivingLicense.seek.css']
})
export class PersonDrivingLicenseSeekUI extends SeekModal<PersonDrivingLicense> {

  personDrivingLicense: PersonDrivingLicense = new PersonDrivingLicense();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.personDrivingLicense);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}