import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CountryService } from './country.service';
import { CountryServiceCollection } from './country.service.collection';


import { Nationality_Person_DetailUI } from './detail/nationality-person.detail';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';

@NgModule({
  declarations: [
    Nationality_Person_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Person_ModuleMaster,
  ],
  exports: [
    Nationality_Person_DetailUI
  ],
  providers: [
    //CountryService,
    //CountryServiceCollection
  ]
})
export class Country_ModuleDetail { }