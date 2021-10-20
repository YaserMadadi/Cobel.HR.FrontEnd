import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Subject } from '../subject';


@Component({
  selector: 'base-pms-subject-seek',
  templateUrl: './subject.seek.html',
  styleUrls: ['./subject.seek.css']
})
export class SubjectSeekUI extends SeekModal<Subject> {

  subject: Subject = new Subject();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.subject);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}