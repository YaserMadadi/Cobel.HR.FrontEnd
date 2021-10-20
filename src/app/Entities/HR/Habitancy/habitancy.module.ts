import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { HabitancyService } from './habitancy.service';
import { HabitancyServiceCollection } from './habitancy.service.collection';

import { HabitancyIndexUI } from './index/habitancy.index';
import { Habitancy_ModuleFunc } from './habitancy.module.func';
import { Habitancy_ModuleMaster } from './habitancy.module.master';



@NgModule({
  declarations: [
    HabitancyIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Habitancy_ModuleMaster,
  ],
  exports: [
    HabitancyIndexUI,
		Habitancy_ModuleMaster,
   ]
})
export class HabitancyModule {}