import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { SynonymService } from './synonym.service';
import { SynonymServiceCollection } from './synonym.service.collection';

import { SynonymIndexUI } from './index/synonym.index';
import { Synonym_ModuleFunc } from './synonym.module.func';
import { Synonym_ModuleMaster } from './synonym.module.master';



@NgModule({
  declarations: [
    SynonymIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Synonym_ModuleMaster,
  ],
  exports: [
    SynonymIndexUI,
		Synonym_ModuleMaster,
   ]
})
export class SynonymModule {}