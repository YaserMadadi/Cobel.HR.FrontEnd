import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { FunctionalKPIService } from './functionalKPI.service';
import { FunctionalKPIServiceCollection } from './functionalKPI.service.collection';
import { FunctionalKPIMasterUI } from './master/functionalKPI.master';
import { FunctionalKPIEditUI } from './edit/functionalKPI.edit';
import { FunctionalKPIDeleteUI } from './delete/functionalKPI.delete';
import { FunctionalKPISeekUI } from './seek/functionalKPI.seek';

import { FunctionalObjective_ModuleFunc } from '../FunctionalObjective/functionalObjective.module.func';
import { MeasurementUnit_ModuleFunc } from '../../Base.PMS/MeasurementUnit/measurementUnit.module.func';

@NgModule({
    declarations: [
        FunctionalKPIEditUI,
		FunctionalKPIDeleteUI,
		FunctionalKPISeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        FunctionalObjective_ModuleFunc,
		MeasurementUnit_ModuleFunc
    ],
    exports: [
        FunctionalKPIEditUI,
		FunctionalKPIDeleteUI,
		FunctionalKPISeekUI
    ]
})

export class FunctionalKPI_ModuleFunc { }