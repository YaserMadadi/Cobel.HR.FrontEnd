import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ConclusionTypeService } from './conclusionType.service';
import { ConclusionTypeServiceCollection } from './conclusionType.service.collection';

import { ConclusionTypeIndexUI } from './index/conclusionType.index';
import { ConclusionType_ModuleFunc } from './conclusionType.module.func';
import { ConclusionType_ModuleMaster } from './conclusionType.module.master';


import { Conclusion_ModuleFunc } from '../Conclusion/conclusion.module.func';
import { Conclusion_ModuleMaster } from '../Conclusion/conclusion.module.master';

@NgModule({
  declarations: [
    ConclusionTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    ConclusionType_ModuleMaster,
		Conclusion_ModuleMaster,
  ],
  exports: [
    ConclusionTypeIndexUI,
		ConclusionType_ModuleMaster,
  ],
  providers: [
    // ConclusionTypeService,
    // ConclusionTypeServiceCollection
  ]
})
export class ConclusionTypeModule {}