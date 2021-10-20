import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UniversityService } from './university.service';
import { UniversityServiceCollection } from './university.service.collection';


import { University_UniversityHistory_DetailUI } from './detail/university-universityHistory.detail';
import { UniversityHistory_ModuleMaster } from '../../HR/UniversityHistory/universityHistory.module.master';

@NgModule({
  declarations: [
    University_UniversityHistory_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		UniversityHistory_ModuleMaster,
  ],
  exports: [
    University_UniversityHistory_DetailUI
  ]
})
export class University_ModuleDetail { }