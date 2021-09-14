import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { UserAccount } from '../userAccount';
import { UserAccountService } from '../userAccount.service';
import { UserAccountDeleteUI } from '../delete/userAccount.delete';
import { UserAccountEditUI } from '../edit/userAccount.edit';



@Component({
  selector: 'core-userAccount-master',
  templateUrl: './userAccount.master.html',
  styleUrls: ['./userAccount.master.css']
})
export class UserAccountMasterUI extends MasterModal<UserAccount> {

  constructor(private userAccountService: UserAccountService) {
    super(userAccountService);
  }
}