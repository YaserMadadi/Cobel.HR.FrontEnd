import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { ConnectionTypeService } from './connectionType.service';
import { ConnectionTypeServiceCollection } from './connectionType.service.collection';
import { ConnectionTypeMasterUI } from './master/connectionType.master';
import { ConnectionTypeEditUI } from './edit/connectionType.edit';
import { ConnectionTypeDeleteUI } from './delete/connectionType.delete';
import { ConnectionTypeSeekUI } from './seek/connectionType.seek';


@NgModule({
    declarations: [
        ConnectionTypeEditUI,
		ConnectionTypeDeleteUI,
		ConnectionTypeSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        // No Item...
    ],
    exports: [
        ConnectionTypeEditUI,
		ConnectionTypeDeleteUI,
		ConnectionTypeSeekUI
    ]
})

export class ConnectionType_ModuleFunc { }