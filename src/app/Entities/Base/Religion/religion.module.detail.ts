import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ReligionService } from './religion.service';
import { ReligionServiceCollection } from './religion.service.collection';


import { Religion_Person_DetailUI } from './detail/religion-person.detail';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';

@NgModule({
  declarations: [
    Religion_Person_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Person_ModuleMaster,
  ],
  exports: [
    Religion_Person_DetailUI
  ]
})
export class Religion_ModuleDetail { }