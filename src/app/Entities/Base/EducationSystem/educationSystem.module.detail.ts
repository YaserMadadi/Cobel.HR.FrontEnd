import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { EducationSystemService } from './educationSystem.service';
import { EducationSystemServiceCollection } from './educationSystem.service.collection';


import { EducationSystem_UniversityHistory_DetailUI } from './detail/educationSystem-universityHistory.detail';
import { UniversityHistory_ModuleMaster } from '../../HR/UniversityHistory/universityHistory.module.master';

@NgModule({
  declarations: [
    EducationSystem_UniversityHistory_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		UniversityHistory_ModuleMaster,
  ],
  exports: [
    EducationSystem_UniversityHistory_DetailUI
  ],
  providers: [
    //EducationSystemService,
    //EducationSystemServiceCollection
  ]
})
export class EducationSystem_ModuleDetail { }