import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { SubjectService } from './subject.service';
import { SubjectServiceCollection } from './subject.service.collection';


import { Subject_IndividualDevelopmentPlan_DetailUI } from './detail/subject-individualDevelopmentPlan.detail';
import { IndividualDevelopmentPlan_ModuleMaster } from '../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan.module.master';

@NgModule({
  declarations: [
    Subject_IndividualDevelopmentPlan_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		IndividualDevelopmentPlan_ModuleMaster,
  ],
  exports: [
    Subject_IndividualDevelopmentPlan_DetailUI
  ],
  providers: [
    //SubjectService,
    //SubjectServiceCollection
  ]
})
export class Subject_ModuleDetail { }