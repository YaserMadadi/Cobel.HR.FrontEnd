
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CommandParameterService } from './commandParameter.service';
import { CommandParameterServiceCollection } from './commandParameter.service.collection';

import { CommandParameterIndexUI } from './index/commandParameter.index';
import { CommandParameter_ModuleFunc } from './commandParameter.module.func';
import { CommandParameter_ModuleMaster } from './commandParameter.module.master';



@NgModule({
  declarations: [
    CommandParameterIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    CommandParameter_ModuleMaster,
  ],
  exports: [
    CommandParameterIndexUI,
		CommandParameter_ModuleMaster,
  ],
  providers: [
    // CommandParameterService,
    // CommandParameterServiceCollection
  ]
})
export class CommandParameterModule {}