import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MeasurementUnitService } from './measurementUnit.service';
import { MeasurementUnitServiceCollection } from './measurementUnit.service.collection';


import { MeasurementUnit_FunctionalKPI_DetailUI } from './detail/measurementUnit-functionalKPI.detail';
import { FunctionalKPI_ModuleMaster } from '../../PMS/FunctionalKPI/functionalKPI.module.master';

@NgModule({
  declarations: [
    MeasurementUnit_FunctionalKPI_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		FunctionalKPI_ModuleMaster,
  ],
  exports: [
    MeasurementUnit_FunctionalKPI_DetailUI
  ],
  
})
export class MeasurementUnit_ModuleDetail { }