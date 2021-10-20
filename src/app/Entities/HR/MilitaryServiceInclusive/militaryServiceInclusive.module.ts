import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { MilitaryServiceInclusiveService } from './militaryServiceInclusive.service';
import { MilitaryServiceInclusiveServiceCollection } from './militaryServiceInclusive.service.collection';

import { MilitaryServiceInclusiveIndexUI } from './index/militaryServiceInclusive.index';
import { MilitaryServiceInclusive_ModuleFunc } from './militaryServiceInclusive.module.func';
import { MilitaryServiceInclusive_ModuleMaster } from './militaryServiceInclusive.module.master';



@NgModule({
  declarations: [
    MilitaryServiceInclusiveIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    MilitaryServiceInclusive_ModuleMaster,
  ],
  exports: [
    MilitaryServiceInclusiveIndexUI,
		MilitaryServiceInclusive_ModuleMaster,
   ]
})
export class MilitaryServiceInclusiveModule {}