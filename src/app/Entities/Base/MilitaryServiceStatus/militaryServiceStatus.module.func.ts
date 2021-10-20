import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { MilitaryServiceStatusService } from './militaryServiceStatus.service';
import { MilitaryServiceStatusServiceCollection } from './militaryServiceStatus.service.collection';
import { MilitaryServiceStatusMasterUI } from './master/militaryServiceStatus.master';
import { MilitaryServiceStatusEditUI } from './edit/militaryServiceStatus.edit';
import { MilitaryServiceStatusDeleteUI } from './delete/militaryServiceStatus.delete';
import { MilitaryServiceStatusSeekUI } from './seek/militaryServiceStatus.seek';


@NgModule({
    declarations: [
        MilitaryServiceStatusEditUI,
		MilitaryServiceStatusDeleteUI,
		MilitaryServiceStatusSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        MilitaryServiceStatusEditUI,
		MilitaryServiceStatusDeleteUI,
		MilitaryServiceStatusSeekUI
    ]
})

export class MilitaryServiceStatus_ModuleFunc { }