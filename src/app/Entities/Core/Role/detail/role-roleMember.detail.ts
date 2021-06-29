import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Role } from '../role';
import { RoleService } from '../role.service';

import { RoleMember } from '../../RoleMember/roleMember';
import { RoleMemberMasterUI } from '../../RoleMember/master/roleMember.master';
import { RoleMemberEditUI } from '../../RoleMember/edit/roleMember.edit';
import { RoleMemberDeleteUI } from '../../RoleMember/delete/roleMember.delete';



@Component({
  selector: 'role-roleMember-detail',
  templateUrl: './role-roleMember.detail.html',
  styleUrls: ['./role-roleMember.detail.css'],
  providers: [RoleService]
}) 

@Injectable()
export class Role_RoleMember_DetailUI extends DetailView<Role> {

  constructor(private roleService: RoleService) {
    super(roleService);
  }

  public RoleMemberList : RoleMember[] = [];
  
  public currentRoleMember : RoleMember = new RoleMember();

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
      .CollectionOfRoleMember(this.role)
      .then(roleMemberList => {
        this.RoleMemberList = roleMemberList;
        this.currentRoleMember = new RoleMember();
      });
  }

  public onSelect(i: number) {
    this.currentRoleMember = this.RoleMemberList[i];
    if (RoleMember.NotConfirm(this.currentRoleMember))
      this.currentRoleMember = new RoleMember();
  }

  public onDblClicked(masterUI: RoleMemberMasterUI) {
    if (RoleMember.NotConfirm(this.currentRoleMember))
      return;
    masterUI.ShowDialog(this.currentRoleMember);
  }

  public onAdd(editUI: RoleMemberEditUI) {
    editUI.Role = this.role;
    editUI.ShowDialog(new RoleMember());
  }

  public onEdit(editUI: RoleMemberEditUI) {
    if (RoleMember.NotConfirm(this.currentRoleMember))
      return;
    editUI.ShowDialog(this.currentRoleMember);
  }

  public onDelete(deleteUI: RoleMemberDeleteUI) {
    if (RoleMember.NotConfirm(this.currentRoleMember))
      return;
    deleteUI.ShowDialog(this.currentRoleMember);
  }

  public onEditModal_Closed(roleMember: RoleMember) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}