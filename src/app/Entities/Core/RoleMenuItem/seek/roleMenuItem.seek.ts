
import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { RoleMenuItem } from '../roleMenuItem';


@Component({
  selector: 'core-roleMenuItem-seek',
  templateUrl: './roleMenuItem.seek.html',
  styleUrls: ['./roleMenuItem.seek.css']
})
export class RoleMenuItemSeekUI extends SeekModal<RoleMenuItem> {

  roleMenuItem: RoleMenuItem = new RoleMenuItem();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.roleMenuItem);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}
