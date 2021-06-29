import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { StrategicObjectveService } from './strategicObjectve.service';
import { StrategicObjectveServiceCollection } from './strategicObjectve.service.collection';
import { StrategicObjectveMasterUI } from './master/strategicObjectve.master';
import { StrategicObjectveEditUI } from './edit/strategicObjectve.edit';
import { StrategicObjectveDeleteUI } from './delete/strategicObjectve.delete';
import { StrategicObjectveSeekUI } from './seek/strategicObjectve.seek';


@NgModule({
    declarations: [
        StrategicObjectveEditUI,
		StrategicObjectveDeleteUI,
		StrategicObjectveSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        StrategicObjectveEditUI,
		StrategicObjectveDeleteUI,
		StrategicObjectveSeekUI
    ],
    providers: [
       //StrategicObjectveService,
       // StrategicObjectveServiceCollection,
    ]
})

export class StrategicObjectve_ModuleFunc { }