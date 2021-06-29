import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { UserAccount } from '../userAccount';
import { UserAccountService } from '../userAccount.service';


@Component({
  selector: 'core-userAccount-delete',
  templateUrl: './userAccount.delete.html',
  styleUrls: ['./userAccount.delete.css'],
  providers: [UserAccountService]
})
export class UserAccountDeleteUI extends DeleteModal<UserAccount> {

    constructor(private userAccountService: UserAccountService){
        super(userAccountService);
    }

}