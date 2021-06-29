import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { SchoolLevelService } from './schoolLevel.service';
import { SchoolLevelServiceCollection } from './schoolLevel.service.collection';


import { SchoolLevel_SchoolHistory_DetailUI } from './detail/schoolLevel-schoolHistory.detail';
import { SchoolHistory_ModuleMaster } from '../../HR/SchoolHistory/schoolHistory.module.master';

@NgModule({
  declarations: [
    SchoolLevel_SchoolHistory_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		SchoolHistory_ModuleMaster,
  ],
  exports: [
    SchoolLevel_SchoolHistory_DetailUI
  ],
  providers: [
    //SchoolLevelService,
    //SchoolLevelServiceCollection
  ]
})
export class SchoolLevel_ModuleDetail { }