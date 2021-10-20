import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { MeasurementUnitService } from './measurementUnit.service';
import { MeasurementUnitServiceCollection } from './measurementUnit.service.collection';

import { MeasurementUnitIndexUI } from './index/measurementUnit.index';
import { MeasurementUnit_ModuleFunc } from './measurementUnit.module.func';
import { MeasurementUnit_ModuleMaster } from './measurementUnit.module.master';


import { FunctionalKPI_ModuleFunc } from '../../PMS/FunctionalKPI/functionalKPI.module.func';
import { FunctionalKPI_ModuleMaster } from '../../PMS/FunctionalKPI/functionalKPI.module.master';

@NgModule({
  declarations: [
    MeasurementUnitIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    MeasurementUnit_ModuleMaster,
		FunctionalKPI_ModuleMaster,
  ],
  exports: [
    MeasurementUnitIndexUI,
		MeasurementUnit_ModuleMaster,
   ]
})
export class MeasurementUnitModule {}