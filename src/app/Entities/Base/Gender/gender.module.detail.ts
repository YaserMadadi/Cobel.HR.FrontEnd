import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { GenderService } from './gender.service';
import { GenderServiceCollection } from './gender.service.collection';


import { Gender_Assessor_DetailUI } from './detail/gender-assessor.detail';
import { Assessor_ModuleMaster } from '../../LAD/Assessor/assessor.module.master';
import { Gender_Coach_DetailUI } from './detail/gender-coach.detail';
import { Coach_ModuleMaster } from '../../LAD/Coach/coach.module.master';
import { Gender_Person_DetailUI } from './detail/gender-person.detail';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';

@NgModule({
  declarations: [
    Gender_Assessor_DetailUI,
		Gender_Coach_DetailUI,
		Gender_Person_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Assessor_ModuleMaster,
		Coach_ModuleMaster,
		Person_ModuleMaster,
  ],
  exports: [
    Gender_Assessor_DetailUI,
		Gender_Coach_DetailUI,
		Gender_Person_DetailUI
  ],
  providers: [
    //GenderService,
    //GenderServiceCollection
  ]
})
export class Gender_ModuleDetail { }