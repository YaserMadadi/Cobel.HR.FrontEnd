import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PersonConnectionService } from './personConnection.service';
import { PersonConnectionServiceCollection } from './personConnection.service.collection';

import { PersonConnectionIndexUI } from './index/personConnection.index';
import { PersonConnection_ModuleFunc } from './personConnection.module.func';
import { PersonConnection_ModuleMaster } from './personConnection.module.master';



@NgModule({
  declarations: [
    PersonConnectionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    PersonConnection_ModuleMaster,
  ],
  exports: [
    PersonConnectionIndexUI,
		PersonConnection_ModuleMaster,
   ]
})
export class PersonConnectionModule {}