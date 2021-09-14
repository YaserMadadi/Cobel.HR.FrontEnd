
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Menu } from '../menu';


@Component({
  selector: 'core-menu-seek',
  templateUrl: './menu.seek.html',
  styleUrls: ['./menu.seek.css']
})
export class MenuSeekUI extends SeekModal<Menu> {

  menu: Menu = new Menu();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.menu);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
