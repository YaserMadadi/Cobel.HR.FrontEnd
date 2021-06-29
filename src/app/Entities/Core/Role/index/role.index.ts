import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Role } from '../role';
import { RoleService } from '../role.service';
import { RoleMasterUI } from '../master/role.master';
import { RoleEditUI } from '../edit/role.edit';
import { RoleDeleteUI } from '../delete/role.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { RolePermissionEditUI } from '../../RolePermission/edit/rolePermission.edit';
import { RolePermission } from '../../RolePermission/rolePermission';
import { RoleMemberEditUI } from '../../RoleMember/edit/roleMember.edit';
import { RoleMember } from '../../RoleMember/roleMember';



@Component({
  selector: 'core-role-index',
  templateUrl: './role.index.html',
  styleUrls: ['./role.index.css']
})
export class RoleIndexUI extends IndexView<Role> implements AfterViewInit, IIndexView<Role> {

  constructor(private roleService: RoleService) {
    super(roleService);
    this.filterInstance = Role.SeekInstance();
    this.currentInstance = new Role();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region RolePermission

  public rolePermission_Clicked(rolePermissionEditUI: RolePermissionEditUI) {
    rolePermissionEditUI.Role = this.currentInstance;
    rolePermissionEditUI.ShowDialog(new RolePermission());
  }
                    
  public rolePermissionEditUI_Closed(rolePermission: RolePermission) {
    if (!rolePermission)
      return;
    this.onRefresh();
  }
  
  //#endregion RolePermission

  //#region RoleMember

  public roleMember_Clicked(roleMemberEditUI: RoleMemberEditUI) {
    roleMemberEditUI.Role = this.currentInstance;
    roleMemberEditUI.ShowDialog(new RoleMember());
  }
                    
  public roleMemberEditUI_Closed(roleMember: RoleMember) {
    if (!roleMember)
      return;
    this.onRefresh();
  }
  
  //#endregion RoleMember


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(roleEditUI: RoleEditUI){
    roleEditUI.ShowDialog(new Role());
  }

  resetFilter() {
    this.filterInstance = Role.SeekInstance();
    
    
  }

  public onEditModalClosed(role: Role) {
    this.onRefresh();
    this.currentInstance = new Role();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}