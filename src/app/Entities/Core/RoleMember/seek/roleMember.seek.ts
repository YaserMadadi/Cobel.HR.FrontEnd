import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { RoleMember } from '../roleMember';


@Component({
  selector: 'core-roleMember-seek',
  templateUrl: './roleMember.seek.html',
  styleUrls: ['./roleMember.seek.css']
})
export class RoleMemberSeekUI extends SeekModal<RoleMember> {

  roleMember: RoleMember = new RoleMember();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.roleMember);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}