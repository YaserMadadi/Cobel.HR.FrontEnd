import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CityService } from './city.service';
import { CityServiceCollection } from './city.service.collection';


import { City_Habitancy_DetailUI } from './detail/city-habitancy.detail';
import { Habitancy_ModuleMaster } from '../../HR/Habitancy/habitancy.module.master';
import { BirthCity_Person_DetailUI } from './detail/birthCity-person.detail';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';
import { City_University_DetailUI } from './detail/city-university.detail';
import { University_ModuleMaster } from '../University/university.module.master';

@NgModule({
  declarations: [
    City_Habitancy_DetailUI,
		BirthCity_Person_DetailUI,
		City_University_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Habitancy_ModuleMaster,
		Person_ModuleMaster,
		University_ModuleMaster,
  ],
  exports: [
    City_Habitancy_DetailUI,
		BirthCity_Person_DetailUI,
		City_University_DetailUI
  ]
})
export class City_ModuleDetail { }