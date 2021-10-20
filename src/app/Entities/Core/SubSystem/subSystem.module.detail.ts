
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { SubSystemService } from './subSystem.service';
import { SubSystemServiceCollection } from './subSystem.service.collection';


import { SubSystem_Menu_DetailUI } from './detail/subSystem-menu.detail';
import { Menu_ModuleMaster } from '../Menu/menu.module.master';

@NgModule({
  declarations: [
    SubSystem_Menu_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Menu_ModuleMaster,
  ],
  exports: [
    SubSystem_Menu_DetailUI
  ],
  providers: [
    //SubSystemService,
    //SubSystemServiceCollection
  ]
})
export class SubSystem_ModuleDetail { }