
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { BadgeTypeService } from './badgeType.service';
import { BadgeTypeServiceCollection } from './badgeType.service.collection';


import { BadgeType_Badge_DetailUI } from './detail/badgeType-badge.detail';
import { Badge_ModuleMaster } from '../Badge/badge.module.master';

@NgModule({
  declarations: [
    BadgeType_Badge_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Badge_ModuleMaster,
  ],
  exports: [
    BadgeType_Badge_DetailUI
  ],
  providers: [
    //BadgeTypeService,
    //BadgeTypeServiceCollection
  ]
})
export class BadgeType_ModuleDetail { }