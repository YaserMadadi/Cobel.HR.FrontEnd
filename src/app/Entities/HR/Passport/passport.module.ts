import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PassportService } from './passport.service';
import { PassportServiceCollection } from './passport.service.collection';

import { PassportIndexUI } from './index/passport.index';
import { Passport_ModuleFunc } from './passport.module.func';
import { Passport_ModuleMaster } from './passport.module.master';



@NgModule({
  declarations: [
    PassportIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Passport_ModuleMaster,
  ],
  exports: [
    PassportIndexUI,
		Passport_ModuleMaster,
   ]
})
export class PassportModule {}