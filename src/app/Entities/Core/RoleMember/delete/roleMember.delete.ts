import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { RoleMember } from '../roleMember';
import { RoleMemberService } from '../roleMember.service';


@Component({
  selector: 'core-roleMember-delete',
  templateUrl: './roleMember.delete.html',
  styleUrls: ['./roleMember.delete.css'],
  
})
export class RoleMemberDeleteUI extends DeleteModal<RoleMember> {

    constructor(private roleMemberService: RoleMemberService){
        super(roleMemberService);
    }

}