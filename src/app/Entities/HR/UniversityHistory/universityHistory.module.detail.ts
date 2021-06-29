import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UniversityHistoryService } from './universityHistory.service';
import { UniversityHistoryServiceCollection } from './universityHistory.service.collection';


import { UniversityHistory_UniversityTerminate_DetailUI } from './detail/universityHistory-universityTerminate.detail';
import { UniversityTerminate_ModuleMaster } from '../UniversityTerminate/universityTerminate.module.master';

@NgModule({
  declarations: [
    UniversityHistory_UniversityTerminate_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		UniversityTerminate_ModuleMaster,
  ],
  exports: [
    UniversityHistory_UniversityTerminate_DetailUI
  ],
  providers: [
    //UniversityHistoryService,
    //UniversityHistoryServiceCollection
  ]
})
export class UniversityHistory_ModuleDetail { }