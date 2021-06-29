import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PropertyService } from './property.service';
import { PropertyServiceCollection } from './property.service.collection';


import { Property_PropertyOption_DetailUI } from './detail/property-propertyOption.detail';
import { PropertyOption_ModuleMaster } from '../PropertyOption/propertyOption.module.master';

@NgModule({
  declarations: [
    Property_PropertyOption_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		PropertyOption_ModuleMaster,
  ],
  exports: [
    Property_PropertyOption_DetailUI
  ],
  providers: [
    //PropertyService,
    //PropertyServiceCollection
  ]
})
export class Property_ModuleDetail { }