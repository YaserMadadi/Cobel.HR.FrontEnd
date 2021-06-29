import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { RoleMember } from '../roleMember';
import { RoleMemberService } from '../roleMember.service';
import { RoleMemberMasterUI } from '../master/roleMember.master';
import { RoleMemberEditUI } from '../edit/roleMember.edit';
import { RoleMemberDeleteUI } from '../delete/roleMember.delete';

import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { Role } from '../../Role/role';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'core-roleMember-index',
  templateUrl: './roleMember.index.html',
  styleUrls: ['./roleMember.index.css']
})
export class RoleMemberIndexUI extends IndexView<RoleMember> implements AfterViewInit, IIndexView<RoleMember> {

  constructor(private roleMemberService: RoleMemberService) {
    super(roleMemberService);
    this.filterInstance = RoleMember.SeekInstance();
    this.currentInstance = new RoleMember();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(roleMemberEditUI: RoleMemberEditUI){
    roleMemberEditUI.ShowDialog(new RoleMember());
  }

  resetFilter() {
    this.filterInstance = RoleMember.SeekInstance();
    
    
  }

  public onEditModalClosed(roleMember: RoleMember) {
    this.onRefresh();
    this.currentInstance = new RoleMember();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}