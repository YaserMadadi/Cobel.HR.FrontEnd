import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Role } from '../role';
import { RoleService } from '../role.service';
import { RoleDeleteUI } from '../delete/role.delete';
import { RoleEditUI } from '../edit/role.edit';
import { RolePermissionService } from '../../RolePermission/rolePermission.service';
import { RoleMemberService } from '../../RoleMember/roleMember.service';



@Component({
  selector: 'core-role-master',
  templateUrl: './role.master.html',
  styleUrls: ['./role.master.css'],
  providers: [
    RoleService,
    RolePermissionService,
		RoleMemberService,
  ]
})
export class RoleMasterUI extends MasterModal<Role> {

  constructor(private roleService: RoleService) {
    super(roleService);
  }
}