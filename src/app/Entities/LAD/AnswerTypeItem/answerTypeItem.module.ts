import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AnswerTypeItemService } from './answerTypeItem.service';
import { AnswerTypeItemServiceCollection } from './answerTypeItem.service.collection';

import { AnswerTypeItemIndexUI } from './index/answerTypeItem.index';
import { AnswerTypeItem_ModuleFunc } from './answerTypeItem.module.func';
import { AnswerTypeItem_ModuleMaster } from './answerTypeItem.module.master';



@NgModule({
  declarations: [
    AnswerTypeItemIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    AnswerTypeItem_ModuleMaster,
  ],
  exports: [
    AnswerTypeItemIndexUI,
		AnswerTypeItem_ModuleMaster,
  ],
  providers: [
    // AnswerTypeItemService,
    // AnswerTypeItemServiceCollection
  ]
})
export class AnswerTypeItemModule {}