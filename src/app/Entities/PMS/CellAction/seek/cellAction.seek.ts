import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { CellAction } from '../cellAction';


@Component({
  selector: 'pms-cellAction-seek',
  templateUrl: './cellAction.seek.html',
  styleUrls: ['./cellAction.seek.css']
})
export class CellActionSeekUI extends SeekModal<CellAction> {

  cellAction: CellAction = new CellAction();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.cellAction);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}