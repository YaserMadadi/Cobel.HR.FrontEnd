import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../xcore/shared/shared.module';

import { PersonConnectionService } from './personConnection.service';
import { PersonConnectionServiceCollection } from './personConnection.service.collection';
import { PersonConnectionMasterUI } from './master/personConnection.master';
import { PersonConnection_ModuleDetail } from './personConnection.module.detail';

@NgModule({
    declarations: [
        PersonConnectionMasterUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        PersonConnection_ModuleDetail
    ],
    exports: [
        PersonConnectionMasterUI
    ]
})

export class PersonConnection_ModuleMaster { }