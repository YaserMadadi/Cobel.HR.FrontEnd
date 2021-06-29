import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { RoleMemberService } from './roleMember.service';
import { RoleMemberServiceCollection } from './roleMember.service.collection';
import { RoleMemberMasterUI } from './master/roleMember.master';
import { RoleMemberEditUI } from './edit/roleMember.edit';
import { RoleMemberDeleteUI } from './delete/roleMember.delete';
import { RoleMemberSeekUI } from './seek/roleMember.seek';

import { Employee_ModuleFunc } from '../../HR/Employee/employee.module.func';
import { Role_ModuleFunc } from '../Role/role.module.func';

@NgModule({
    declarations: [
        RoleMemberEditUI,
		RoleMemberDeleteUI,
		RoleMemberSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Employee_ModuleFunc,
		Role_ModuleFunc
    ],
    exports: [
        RoleMemberEditUI,
		RoleMemberDeleteUI,
		RoleMemberSeekUI
    ],
    providers: [
       //RoleMemberService,
       // RoleMemberServiceCollection,
    ]
})

export class RoleMember_ModuleFunc { }