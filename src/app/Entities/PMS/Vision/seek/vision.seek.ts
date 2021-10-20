import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Vision } from '../vision';


@Component({
  selector: 'pms-vision-seek',
  templateUrl: './vision.seek.html',
  styleUrls: ['./vision.seek.css']
})
export class VisionSeekUI extends SeekModal<Vision> {

  vision: Vision = new Vision();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.vision);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}