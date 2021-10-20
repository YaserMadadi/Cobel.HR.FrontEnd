import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { RoleMember } from '../roleMember';
import { RoleMemberService } from '../roleMember.service';
import { RoleMemberDeleteUI } from '../delete/roleMember.delete';
import { RoleMemberEditUI } from '../edit/roleMember.edit';



@Component({
  selector: 'core-roleMember-master',
  templateUrl: './roleMember.master.html',
  styleUrls: ['./roleMember.master.css']
})
export class RoleMemberMasterUI extends MasterModal<RoleMember> {

  constructor(private roleMemberService: RoleMemberService) {
    super(roleMemberService);
  }
}