import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { RoleMemberService } from './roleMember.service';
import { RoleMemberServiceCollection } from './roleMember.service.collection';
import { RoleMemberMasterUI } from './master/roleMember.master';
import { RoleMember_ModuleDetail } from './roleMember.module.detail';

@NgModule({
    declarations: [
        RoleMemberMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        RoleMember_ModuleDetail
    ],
    exports: [
        RoleMemberMasterUI
    ]
})

export class RoleMember_ModuleMaster { }