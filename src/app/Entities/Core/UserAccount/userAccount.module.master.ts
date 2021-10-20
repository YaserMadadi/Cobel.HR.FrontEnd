import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UserAccountService } from './userAccount.service';
import { UserAccountServiceCollection } from './userAccount.service.collection';
import { UserAccountMasterUI } from './master/userAccount.master';
import { UserAccount_ModuleDetail } from './userAccount.module.detail';

@NgModule({
    declarations: [
        UserAccountMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        UserAccount_ModuleDetail
    ],
    exports: [
        UserAccountMasterUI
    ]
})

export class UserAccount_ModuleMaster { }