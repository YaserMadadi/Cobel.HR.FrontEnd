import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { ConclusionType } from '../conclusionType';


@Component({
  selector: 'lad-conclusionType-seek',
  templateUrl: './conclusionType.seek.html',
  styleUrls: ['./conclusionType.seek.css']
})
export class ConclusionTypeSeekUI extends SeekModal<ConclusionType> {

  conclusionType: ConclusionType = new ConclusionType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.conclusionType);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}