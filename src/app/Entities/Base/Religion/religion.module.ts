import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ReligionService } from './religion.service';
import { ReligionServiceCollection } from './religion.service.collection';

import { ReligionIndexUI } from './index/religion.index';
import { Religion_ModuleFunc } from './religion.module.func';
import { Religion_ModuleMaster } from './religion.module.master';


import { Person_ModuleFunc } from '../../HR/Person/person.module.func';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';

@NgModule({
  declarations: [
    ReligionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Religion_ModuleMaster,
		Person_ModuleMaster,
  ],
  exports: [
    ReligionIndexUI,
		Religion_ModuleMaster,
   ]
})
export class ReligionModule {}