import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { RolePermission } from '../rolePermission';


@Component({
  selector: 'core-rolePermission-seek',
  templateUrl: './rolePermission.seek.html',
  styleUrls: ['./rolePermission.seek.css']
})
export class RolePermissionSeekUI extends SeekModal<RolePermission> {

  rolePermission: RolePermission = new RolePermission();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.rolePermission);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}