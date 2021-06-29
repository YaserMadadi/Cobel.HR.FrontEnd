import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { UserAccount } from '../userAccount';
import { UserAccountService } from '../userAccount.service';
import { UserAccountMasterUI } from '../master/userAccount.master';
import { UserAccountEditUI } from '../edit/userAccount.edit';
import { UserAccountDeleteUI } from '../delete/userAccount.delete';

import { Person } from '../../../HR/Person/person';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'core-userAccount-index',
  templateUrl: './userAccount.index.html',
  styleUrls: ['./userAccount.index.css']
})
export class UserAccountIndexUI extends IndexView<UserAccount> implements AfterViewInit, IIndexView<UserAccount> {

  constructor(private userAccountService: UserAccountService) {
    super(userAccountService);
    this.filterInstance = UserAccount.SeekInstance();
    this.currentInstance = new UserAccount();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(userAccountEditUI: UserAccountEditUI){
    userAccountEditUI.ShowDialog(new UserAccount());
  }

  resetFilter() {
    this.filterInstance = UserAccount.SeekInstance();
    
    
  }

  public onEditModalClosed(userAccount: UserAccount) {
    this.onRefresh();
    this.currentInstance = new UserAccount();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}