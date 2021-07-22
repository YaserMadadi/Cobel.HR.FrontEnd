import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { HoldingSection } from '../holdingSection';


@Component({
  selector: 'base-holdingSection-seek',
  templateUrl: './holdingSection.seek.html',
  styleUrls: ['./holdingSection.seek.css']
})
export class HoldingSectionSeekUI extends SeekModal<HoldingSection> {

  holdingSection: HoldingSection = new HoldingSection();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.holdingSection);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}