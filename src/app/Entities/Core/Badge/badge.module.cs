
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { BadgeService } from './badge.service';
import { BadgeServiceCollection } from './badge.service.collection';

import { BadgeIndexUI } from './index/badge.index';
import { Badge_ModuleFunc } from './badge.module.func';
import { Badge_ModuleMaster } from './badge.module.master';



@NgModule({
  declarations: [
    BadgeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Badge_ModuleMaster,
  ],
  exports: [
    BadgeIndexUI,
		Badge_ModuleMaster,
  ],
  providers: [
    // BadgeService,
    // BadgeServiceCollection
  ]
})
export class BadgeModule {}