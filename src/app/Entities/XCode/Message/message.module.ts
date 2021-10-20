import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { MessageService } from './message.service';
import { MessageServiceCollection } from './message.service.collection';

import { MessageIndexUI } from './index/message.index';
import { Message_ModuleFunc } from './message.module.func';
import { Message_ModuleMaster } from './message.module.master';



@NgModule({
  declarations: [
    MessageIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Message_ModuleMaster,
  ],
  exports: [
    MessageIndexUI,
		Message_ModuleMaster,
   ]
})
export class MessageModule {}