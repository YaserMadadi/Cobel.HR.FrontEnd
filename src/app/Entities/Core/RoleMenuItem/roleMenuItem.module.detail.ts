
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { RoleMenuItemService } from './roleMenuItem.service';
import { RoleMenuItemServiceCollection } from './roleMenuItem.service.collection';



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
    //RoleMenuItemService,
    //RoleMenuItemServiceCollection
  ]
})
export class RoleMenuItem_ModuleDetail { }