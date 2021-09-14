import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { MaritalStatusService } from './maritalStatus.service';
import { MaritalStatusServiceCollection } from './maritalStatus.service.collection';
import { MaritalStatusMasterUI } from './master/maritalStatus.master';
import { MaritalStatusEditUI } from './edit/maritalStatus.edit';
import { MaritalStatusDeleteUI } from './delete/maritalStatus.delete';
import { MaritalStatusSeekUI } from './seek/maritalStatus.seek';


@NgModule({
    declarations: [
        MaritalStatusEditUI,
		MaritalStatusDeleteUI,
		MaritalStatusSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        MaritalStatusEditUI,
		MaritalStatusDeleteUI,
		MaritalStatusSeekUI
    ]
})

export class MaritalStatus_ModuleFunc { }
