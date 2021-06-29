import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { InclusiveType } from '../inclusiveType';


@Component({
  selector: 'base-inclusiveType-seek',
  templateUrl: './inclusiveType.seek.html',
  styleUrls: ['./inclusiveType.seek.css']
})
export class InclusiveTypeSeekUI extends SeekModal<InclusiveType> {

  inclusiveType: InclusiveType = new InclusiveType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.inclusiveType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}