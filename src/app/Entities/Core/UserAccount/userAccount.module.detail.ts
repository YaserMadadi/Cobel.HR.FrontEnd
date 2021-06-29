import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UserAccountService } from './userAccount.service';
import { UserAccountServiceCollection } from './userAccount.service.collection';



@NgModule({
  declarations: [
    // No Item...
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    // No Item...
  ],
  providers: [
    //UserAccountService,
    //UserAccountServiceCollection
  ]
})
export class UserAccount_ModuleDetail { }