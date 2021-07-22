import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { UserAccount } from '../userAccount';


@Component({
  selector: 'core-userAccount-seek',
  templateUrl: './userAccount.seek.html',
  styleUrls: ['./userAccount.seek.css']
})
export class UserAccountSeekUI extends SeekModal<UserAccount> {

  userAccount: UserAccount = new UserAccount();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.userAccount);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}