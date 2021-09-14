import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CoachService } from './coach.service';
import { CoachServiceCollection } from './coach.service.collection';


import { Coach_CoachConnectionLine_DetailUI } from './detail/coach-coachConnectionLine.detail';
import { CoachConnectionLine_ModuleMaster } from '../CoachConnectionLine/coachConnectionLine.module.master';
import { Coach_Coaching_DetailUI } from './detail/coach-coaching.detail';
import { Coaching_ModuleMaster } from '../Coaching/coaching.module.master';

@NgModule({
  declarations: [
    Coach_CoachConnectionLine_DetailUI,
		Coach_Coaching_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		CoachConnectionLine_ModuleMaster,
		Coaching_ModuleMaster,
  ],
  exports: [
    Coach_CoachConnectionLine_DetailUI,
		Coach_Coaching_DetailUI
  ],
  
})
export class Coach_ModuleDetail { }