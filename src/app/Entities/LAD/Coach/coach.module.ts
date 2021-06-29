import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CoachService } from './coach.service';
import { CoachServiceCollection } from './coach.service.collection';

import { CoachIndexUI } from './index/coach.index';
import { Coach_ModuleFunc } from './coach.module.func';
import { Coach_ModuleMaster } from './coach.module.master';


import { CoachConnectionLine_ModuleFunc } from '../CoachConnectionLine/coachConnectionLine.module.func';
import { CoachConnectionLine_ModuleMaster } from '../CoachConnectionLine/coachConnectionLine.module.master';
import { Coaching_ModuleFunc } from '../Coaching/coaching.module.func';
import { Coaching_ModuleMaster } from '../Coaching/coaching.module.master';

@NgModule({
  declarations: [
    CoachIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Coach_ModuleMaster,
		CoachConnectionLine_ModuleMaster,
		Coaching_ModuleMaster,
  ],
  exports: [
    CoachIndexUI,
		Coach_ModuleMaster,
  ],
  providers: [
    // CoachService,
    // CoachServiceCollection
  ]
})
export class CoachModule {}