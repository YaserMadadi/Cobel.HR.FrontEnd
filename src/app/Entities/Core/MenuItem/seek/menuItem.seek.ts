
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { MenuItem } from '../menuItem';


@Component({
  selector: 'core-menuItem-seek',
  templateUrl: './menuItem.seek.html',
  styleUrls: ['./menuItem.seek.css']
})
export class MenuItemSeekUI extends SeekModal<MenuItem> {

  menuItem: MenuItem = new MenuItem();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.menuItem);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
