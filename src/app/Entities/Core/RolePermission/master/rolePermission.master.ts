import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { RolePermission } from '../rolePermission';
import { RolePermissionService } from '../rolePermission.service';
import { RolePermissionDeleteUI } from '../delete/rolePermission.delete';
import { RolePermissionEditUI } from '../edit/rolePermission.edit';



@Component({
  selector: 'core-rolePermission-master',
  templateUrl: './rolePermission.master.html',
  styleUrls: ['./rolePermission.master.css'],
  providers: [
    RolePermissionService,
    
  ]
})
export class RolePermissionMasterUI extends MasterModal<RolePermission> {

  constructor(private rolePermissionService: RolePermissionService) {
    super(rolePermissionService);
  }
}