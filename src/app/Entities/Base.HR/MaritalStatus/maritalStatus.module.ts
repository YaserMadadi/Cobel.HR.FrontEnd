
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { MaritalStatusService } from './maritalStatus.service';
import { MaritalStatusServiceCollection } from './maritalStatus.service.collection';

import { MaritalStatusIndexUI } from './index/maritalStatus.index';
import { MaritalStatus_ModuleFunc } from './maritalStatus.module.func';
import { MaritalStatus_ModuleMaster } from './maritalStatus.module.master';


import { Person_ModuleFunc } from '../../HR/Person/person.module.func';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';

@NgModule({
  declarations: [
    MaritalStatusIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    MaritalStatus_ModuleMaster,
		Person_ModuleMaster,
  ],
  exports: [
    MaritalStatusIndexUI,
		MaritalStatus_ModuleMaster,
   ]
})
export class MaritalStatusModule {}