import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { MeasurementUnitService } from './measurementUnit.service';
import { MeasurementUnitServiceCollection } from './measurementUnit.service.collection';
import { MeasurementUnitMasterUI } from './master/measurementUnit.master';
import { MeasurementUnitEditUI } from './edit/measurementUnit.edit';
import { MeasurementUnitDeleteUI } from './delete/measurementUnit.delete';
import { MeasurementUnitSeekUI } from './seek/measurementUnit.seek';


@NgModule({
    declarations: [
        MeasurementUnitEditUI,
		MeasurementUnitDeleteUI,
		MeasurementUnitSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        MeasurementUnitEditUI,
		MeasurementUnitDeleteUI,
		MeasurementUnitSeekUI
    ]
})

export class MeasurementUnit_ModuleFunc { }