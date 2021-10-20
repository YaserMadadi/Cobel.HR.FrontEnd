import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ConnectionTypeService } from './connectionType.service';
import { ConnectionTypeServiceCollection } from './connectionType.service.collection';


import { ConnectionType_AssessorConnectionLine_DetailUI } from './detail/connectionType-assessorConnectionLine.detail';
import { AssessorConnectionLine_ModuleMaster } from '../../LAD/AssessorConnectionLine/assessorConnectionLine.module.master';
import { ConnectionType_CoachConnectionLine_DetailUI } from './detail/connectionType-coachConnectionLine.detail';
import { CoachConnectionLine_ModuleMaster } from '../../LAD/CoachConnectionLine/coachConnectionLine.module.master';
import { ConnectionType_PersonConnection_DetailUI } from './detail/connectionType-personConnection.detail';
import { PersonConnection_ModuleMaster } from '../../HR/PersonConnection/personConnection.module.master';

@NgModule({
  declarations: [
    ConnectionType_AssessorConnectionLine_DetailUI,
		ConnectionType_CoachConnectionLine_DetailUI,
		ConnectionType_PersonConnection_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		AssessorConnectionLine_ModuleMaster,
		CoachConnectionLine_ModuleMaster,
		PersonConnection_ModuleMaster,
  ],
  exports: [
    ConnectionType_AssessorConnectionLine_DetailUI,
		ConnectionType_CoachConnectionLine_DetailUI,
		ConnectionType_PersonConnection_DetailUI
  ]
})
export class ConnectionType_ModuleDetail { }