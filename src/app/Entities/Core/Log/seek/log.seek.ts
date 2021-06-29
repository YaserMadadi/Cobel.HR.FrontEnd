import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Log } from '../log';


@Component({
  selector: 'core-log-seek',
  templateUrl: './log.seek.html',
  styleUrls: ['./log.seek.css']
})
export class LogSeekUI extends SeekModal<Log> {

  log: Log = new Log();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.log);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}