import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MeasurementUnitService } from './measurementUnit.service';
import { MeasurementUnitServiceCollection } from './measurementUnit.service.collection';
import { MeasurementUnitMasterUI } from './master/measurementUnit.master';
import { MeasurementUnit_ModuleDetail } from './measurementUnit.module.detail';

@NgModule({
    declarations: [
        MeasurementUnitMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        MeasurementUnit_ModuleDetail
    ],
    exports: [
        MeasurementUnitMasterUI
    ],
    providers: [
        //MeasurementUnitService,
       // MeasurementUnitServiceCollection   
    ]
})

export class MeasurementUnit_ModuleMaster { }