import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { StrategicObjectveService } from './strategicObjectve.service';
import { StrategicObjectveServiceCollection } from './strategicObjectve.service.collection';
import { StrategicObjectveMasterUI } from './master/strategicObjectve.master';
import { StrategicObjectve_ModuleDetail } from './strategicObjectve.module.detail';

@NgModule({
    declarations: [
        StrategicObjectveMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        StrategicObjectve_ModuleDetail
    ],
    exports: [
        StrategicObjectveMasterUI
    ],
    providers: [
        //StrategicObjectveService,
       // StrategicObjectveServiceCollection   
    ]
})

export class StrategicObjectve_ModuleMaster { }