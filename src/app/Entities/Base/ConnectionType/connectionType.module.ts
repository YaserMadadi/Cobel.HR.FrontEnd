import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ConnectionTypeService } from './connectionType.service';
import { ConnectionTypeServiceCollection } from './connectionType.service.collection';

import { ConnectionTypeIndexUI } from './index/connectionType.index';
import { ConnectionType_ModuleFunc } from './connectionType.module.func';
import { ConnectionType_ModuleMaster } from './connectionType.module.master';


import { AssessorConnectionLine_ModuleFunc } from '../../LAD/AssessorConnectionLine/assessorConnectionLine.module.func';
import { AssessorConnectionLine_ModuleMaster } from '../../LAD/AssessorConnectionLine/assessorConnectionLine.module.master';
import { CoachConnectionLine_ModuleFunc } from '../../LAD/CoachConnectionLine/coachConnectionLine.module.func';
import { CoachConnectionLine_ModuleMaster } from '../../LAD/CoachConnectionLine/coachConnectionLine.module.master';
import { PersonConnection_ModuleFunc } from '../../HR/PersonConnection/personConnection.module.func';
import { PersonConnection_ModuleMaster } from '../../HR/PersonConnection/personConnection.module.master';

@NgModule({
  declarations: [
    ConnectionTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ConnectionType_ModuleMaster,
		AssessorConnectionLine_ModuleMaster,
		CoachConnectionLine_ModuleMaster,
		PersonConnection_ModuleMaster,
  ],
  exports: [
    ConnectionTypeIndexUI,
		ConnectionType_ModuleMaster,
   ]
})
export class ConnectionTypeModule {}