import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { HabitancyTypeService } from './habitancyType.service';
import { HabitancyTypeServiceCollection } from './habitancyType.service.collection';

import { HabitancyTypeIndexUI } from './index/habitancyType.index';
import { HabitancyType_ModuleFunc } from './habitancyType.module.func';
import { HabitancyType_ModuleMaster } from './habitancyType.module.master';


import { Habitancy_ModuleFunc } from '../../HR/Habitancy/habitancy.module.func';
import { Habitancy_ModuleMaster } from '../../HR/Habitancy/habitancy.module.master';

@NgModule({
  declarations: [
    HabitancyTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    HabitancyType_ModuleMaster,
		Habitancy_ModuleMaster,
  ],
  exports: [
    HabitancyTypeIndexUI,
		HabitancyType_ModuleMaster,
   ]
})
export class HabitancyTypeModule {}