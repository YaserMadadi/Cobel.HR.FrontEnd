import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { FieldCategoryService } from './fieldCategory.service';
import { FieldCategoryServiceCollection } from './fieldCategory.service.collection';


import { FieldCategory_PersonCertificate_DetailUI } from './detail/fieldCategory-personCertificate.detail';
import { PersonCertificate_ModuleMaster } from '../../HR/PersonCertificate/personCertificate.module.master';

@NgModule({
  declarations: [
    FieldCategory_PersonCertificate_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		PersonCertificate_ModuleMaster,
  ],
  exports: [
    FieldCategory_PersonCertificate_DetailUI
  ],
  providers: [
    //FieldCategoryService,
    //FieldCategoryServiceCollection
  ]
})
export class FieldCategory_ModuleDetail { }