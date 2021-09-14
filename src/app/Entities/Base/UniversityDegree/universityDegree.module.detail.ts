import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UniversityDegreeService } from './universityDegree.service';
import { UniversityDegreeServiceCollection } from './universityDegree.service.collection';


import { UniversityDegree_UniversityHistory_DetailUI } from './detail/universityDegree-universityHistory.detail';
import { UniversityHistory_ModuleMaster } from '../../HR/UniversityHistory/universityHistory.module.master';

@NgModule({
  declarations: [
    UniversityDegree_UniversityHistory_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		UniversityHistory_ModuleMaster,
  ],
  exports: [
    UniversityDegree_UniversityHistory_DetailUI
  ]
})
export class UniversityDegree_ModuleDetail { }