
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { MenuItemType } from '../menuItemType';


@Component({
  selector: 'core-menuItemType-seek',
  templateUrl: './menuItemType.seek.html',
  styleUrls: ['./menuItemType.seek.css']
})
export class MenuItemTypeSeekUI extends SeekModal<MenuItemType> {

  menuItemType: MenuItemType = new MenuItemType();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.menuItemType);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
