import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CertificationType } from '../certificationType';


@Component({
  selector: 'base-certificationType-seek',
  templateUrl: './certificationType.seek.html',
  styleUrls: ['./certificationType.seek.css']
})
export class CertificationTypeSeekUI extends SeekModal<CertificationType> {

  certificationType: CertificationType = new CertificationType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.certificationType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}