
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { BadgeTypeService } from './badgeType.service';
import { BadgeTypeServiceCollection } from './badgeType.service.collection';

import { BadgeTypeIndexUI } from './index/badgeType.index';
import { BadgeType_ModuleFunc } from './badgeType.module.func';
import { BadgeType_ModuleMaster } from './badgeType.module.master';


import { Badge_ModuleFunc } from '../Badge/badge.module.func';
import { Badge_ModuleMaster } from '../Badge/badge.module.master';

@NgModule({
  declarations: [
    BadgeTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    BadgeType_ModuleMaster,
		Badge_ModuleMaster,
  ],
  exports: [
    BadgeTypeIndexUI,
		BadgeType_ModuleMaster,
  ],
  providers: [
    // BadgeTypeService,
    // BadgeTypeServiceCollection
  ]
})
export class BadgeTypeModule {}