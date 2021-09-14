import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Role } from '../role';
import { RoleService } from '../role.service';

import { RolePermission } from '../../RolePermission/rolePermission';
import { RolePermissionMasterUI } from '../../RolePermission/master/rolePermission.master';
import { RolePermissionEditUI } from '../../RolePermission/edit/rolePermission.edit';
import { RolePermissionDeleteUI } from '../../RolePermission/delete/rolePermission.delete';



@Component({
  selector: 'role-rolePermission-detail',
  templateUrl: './role-rolePermission.detail.html',
  styleUrls: ['./role-rolePermission.detail.css']
})
export class Role_RolePermission_DetailUI extends DetailView<Role> {

  constructor(private roleService: RoleService) {
    super(roleService);
  }

  public RolePermissionList : RolePermission[] = [];
  
  public currentRolePermission : RolePermission = new RolePermission();

  private role: Role = new Role();

  @Input()
  public set Role(value: Role) {
    this.role = value;
    this.onReload();
  }

  public get Role(): Role { return this.role }

  public onReload(){
    if (Role.NotConfirm(this.role))
      return;
    this.roleService
      .ServiceCollection
      .CollectionOfRolePermission(this.role)
      .then(rolePermissionList => {
        this.RolePermissionList = rolePermissionList;
        this.currentRolePermission = new RolePermission();
      });
  }

  public onSelect(i: number) {
    this.currentRolePermission = this.RolePermissionList[i];
    if (RolePermission.NotConfirm(this.currentRolePermission))
      this.currentRolePermission = new RolePermission();
  }

  public onDblClicked(masterUI: RolePermissionMasterUI) {
    if (RolePermission.NotConfirm(this.currentRolePermission))
      return;
    masterUI.ShowDialog(this.currentRolePermission);
  }

  public onAdd(editUI: RolePermissionEditUI) {
    editUI.Role = this.role;
    editUI.ShowDialog(new RolePermission());
  }

  public onEdit(editUI: RolePermissionEditUI) {
    if (RolePermission.NotConfirm(this.currentRolePermission))
      return;
    editUI.ShowDialog(this.currentRolePermission);
  }

  public onDelete(deleteUI: RolePermissionDeleteUI) {
    if (RolePermission.NotConfirm(this.currentRolePermission))
      return;
    deleteUI.ShowDialog(this.currentRolePermission);
  }

  public onEditModal_Closed(rolePermission: RolePermission) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}