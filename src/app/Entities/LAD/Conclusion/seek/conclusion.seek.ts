import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Conclusion } from '../conclusion';


@Component({
  selector: 'lad-conclusion-seek',
  templateUrl: './conclusion.seek.html',
  styleUrls: ['./conclusion.seek.css']
})
export class ConclusionSeekUI extends SeekModal<Conclusion> {

  conclusion: Conclusion = new Conclusion();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.conclusion);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}