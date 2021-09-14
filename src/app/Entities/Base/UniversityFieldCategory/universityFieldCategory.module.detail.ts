import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UniversityFieldCategoryService } from './universityFieldCategory.service';
import { UniversityFieldCategoryServiceCollection } from './universityFieldCategory.service.collection';


import { UniversityFieldCategory_FieldOfStudy_DetailUI } from './detail/universityFieldCategory-fieldOfStudy.detail';
import { FieldOfStudy_ModuleMaster } from '../FieldOfStudy/fieldOfStudy.module.master';

@NgModule({
  declarations: [
    UniversityFieldCategory_FieldOfStudy_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		FieldOfStudy_ModuleMaster,
  ],
  exports: [
    UniversityFieldCategory_FieldOfStudy_DetailUI
  ]
})
export class UniversityFieldCategory_ModuleDetail { }