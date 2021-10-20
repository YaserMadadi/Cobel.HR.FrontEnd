import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { RolePermission } from '../rolePermission';
import { RolePermissionService } from '../rolePermission.service';


@Component({
  selector: 'core-rolePermission-delete',
  templateUrl: './rolePermission.delete.html',
  styleUrls: ['./rolePermission.delete.css'],
  
})
export class RolePermissionDeleteUI extends DeleteModal<RolePermission> {

    constructor(private rolePermissionService: RolePermissionService){
        super(rolePermissionService);
    }

}