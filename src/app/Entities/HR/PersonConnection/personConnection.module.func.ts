import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XCommonModule } from '../../../../xcore/xcommon.module';

import { PersonConnectionService } from './personConnection.service';
import { PersonConnectionServiceCollection } from './personConnection.service.collection';
import { PersonConnectionMasterUI } from './master/personConnection.master';
import { PersonConnectionEditUI } from './edit/personConnection.edit';
import { PersonConnectionDeleteUI } from './delete/personConnection.delete';
import { PersonConnectionSeekUI } from './seek/personConnection.seek';

import { Person_ModuleFunc } from '../Person/person.module.func';
import { ConnectionType_ModuleFunc } from '../../Base/ConnectionType/connectionType.module.func';

@NgModule({
    declarations: [
        PersonConnectionEditUI,
		PersonConnectionDeleteUI,
		PersonConnectionSeekUI
    ],
    imports: [
        FormsModule,
        CommonModule,
        XCommonModule,
        Person_ModuleFunc,
		ConnectionType_ModuleFunc
    ],
    exports: [
        PersonConnectionEditUI,
		PersonConnectionDeleteUI,
		PersonConnectionSeekUI
    ],
    providers: [
       //PersonConnectionService,
       // PersonConnectionServiceCollection,
    ]
})

export class PersonConnection_ModuleFunc { }