import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Role } from '../role';


@Component({
  selector: 'core-role-seek',
  templateUrl: './role.seek.html',
  styleUrls: ['./role.seek.css']
})
export class RoleSeekUI extends SeekModal<Role> {

  role: Role = new Role();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.role);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}