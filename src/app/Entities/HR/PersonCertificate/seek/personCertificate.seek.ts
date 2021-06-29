import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { PersonCertificate } from '../personCertificate';


@Component({
  selector: 'hr-personCertificate-seek',
  templateUrl: './personCertificate.seek.html',
  styleUrls: ['./personCertificate.seek.css']
})
export class PersonCertificateSeekUI extends SeekModal<PersonCertificate> {

  personCertificate: PersonCertificate = new PersonCertificate();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.personCertificate);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}