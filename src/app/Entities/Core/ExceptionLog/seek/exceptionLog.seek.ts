
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ExceptionLog } from '../exceptionLog';


@Component({
  selector: 'core-exceptionLog-seek',
  templateUrl: './exceptionLog.seek.html',
  styleUrls: ['./exceptionLog.seek.css']
})
export class ExceptionLogSeekUI extends SeekModal<ExceptionLog> {

  exceptionLog: ExceptionLog = new ExceptionLog();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.exceptionLog);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
