import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FieldOfStudyService } from './fieldOfStudy.service';
import { FieldOfStudyServiceCollection } from './fieldOfStudy.service.collection';


import { FieldOfStudy_UniversityHistory_DetailUI } from './detail/fieldOfStudy-universityHistory.detail';
import { UniversityHistory_ModuleMaster } from '../../HR/UniversityHistory/universityHistory.module.master';

@NgModule({
  declarations: [
    FieldOfStudy_UniversityHistory_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		UniversityHistory_ModuleMaster,
  ],
  exports: [
    FieldOfStudy_UniversityHistory_DetailUI
  ]
})
export class FieldOfStudy_ModuleDetail { }