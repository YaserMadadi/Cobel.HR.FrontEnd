import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ConnectionTypeService } from './connectionType.service';
import { ConnectionTypeServiceCollection } from './connectionType.service.collection';
import { ConnectionTypeMasterUI } from './master/connectionType.master';
import { ConnectionType_ModuleDetail } from './connectionType.module.detail';

@NgModule({
    declarations: [
        ConnectionTypeMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ConnectionType_ModuleDetail
    ],
    exports: [
        ConnectionTypeMasterUI
    ]
})

export class ConnectionType_ModuleMaster { }