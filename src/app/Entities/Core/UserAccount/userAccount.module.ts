import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { UserAccountService } from './userAccount.service';
import { UserAccountServiceCollection } from './userAccount.service.collection';

import { UserAccountIndexUI } from './index/userAccount.index';
import { UserAccount_ModuleFunc } from './userAccount.module.func';
import { UserAccount_ModuleMaster } from './userAccount.module.master';



@NgModule({
  declarations: [
    UserAccountIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    UserAccount_ModuleMaster,
  ],
  exports: [
    UserAccountIndexUI,
		UserAccount_ModuleMaster,
  ],
  providers: [
    // UserAccountService,
    // UserAccountServiceCollection
  ]
})
export class UserAccountModule {}