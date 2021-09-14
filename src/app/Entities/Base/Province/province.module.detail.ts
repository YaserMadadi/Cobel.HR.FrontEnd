import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ProvinceService } from './province.service';
import { ProvinceServiceCollection } from './province.service.collection';


import { Province_City_DetailUI } from './detail/province-city.detail';
import { City_ModuleMaster } from '../City/city.module.master';

@NgModule({
  declarations: [
    Province_City_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		City_ModuleMaster,
  ],
  exports: [
    Province_City_DetailUI
  ]
})
export class Province_ModuleDetail { }