import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Religion } from '../religion';


@Component({
  selector: 'base-religion-seek',
  templateUrl: './religion.seek.html',
  styleUrls: ['./religion.seek.css']
})
export class ReligionSeekUI extends SeekModal<Religion> {

  religion: Religion = new Religion();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.religion);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}