import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Role } from '../role';
import { RoleService } from '../role.service';


@Component({
  selector: 'core-role-delete',
  templateUrl: './role.delete.html',
  styleUrls: ['./role.delete.css'],
  providers: [RoleService]
})
export class RoleDeleteUI extends DeleteModal<Role> {

    constructor(private roleService: RoleService){
        super(roleService);
    }

}