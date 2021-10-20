import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ImpersonateService } from './impersonate.service';
import { ImpersonateServiceCollection } from './impersonate.service.collection';

import { ImpersonateIndexUI } from './index/impersonate.index';
import { Impersonate_ModuleFunc } from './impersonate.module.func';
import { Impersonate_ModuleMaster } from './impersonate.module.master';



@NgModule({
  declarations: [
    ImpersonateIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Impersonate_ModuleMaster,
  ],
  exports: [
    ImpersonateIndexUI,
		Impersonate_ModuleMaster,
   ]
})
export class ImpersonateModule {}