
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { RelativeType } from '../relativeType';


@Component({
  selector: 'base-hr-relativeType-seek',
  templateUrl: './relativeType.seek.html',
  styleUrls: ['./relativeType.seek.css']
})
export class RelativeTypeSeekUI extends SeekModal<RelativeType> {

  relativeType: RelativeType = new RelativeType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.relativeType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
