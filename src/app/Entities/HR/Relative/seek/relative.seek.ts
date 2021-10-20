import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Relative } from '../relative';


@Component({
  selector: 'hr-relative-seek',
  templateUrl: './relative.seek.html',
  styleUrls: ['./relative.seek.css']
})
export class RelativeSeekUI extends SeekModal<Relative> {

  relative: Relative = new Relative();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.relative);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}