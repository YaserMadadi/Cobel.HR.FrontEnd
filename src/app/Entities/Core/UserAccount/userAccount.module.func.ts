import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { UserAccountService } from './userAccount.service';
import { UserAccountServiceCollection } from './userAccount.service.collection';
import { UserAccountMasterUI } from './master/userAccount.master';
import { UserAccountEditUI } from './edit/userAccount.edit';
import { UserAccountDeleteUI } from './delete/userAccount.delete';
import { UserAccountSeekUI } from './seek/userAccount.seek';

import { Person_ModuleFunc } from '../../HR/Person/person.module.func';

@NgModule({
    declarations: [
        UserAccountEditUI,
		UserAccountDeleteUI,
		UserAccountSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc
    ],
    exports: [
        UserAccountEditUI,
		UserAccountDeleteUI,
		UserAccountSeekUI
    ]
})

export class UserAccount_ModuleFunc { }