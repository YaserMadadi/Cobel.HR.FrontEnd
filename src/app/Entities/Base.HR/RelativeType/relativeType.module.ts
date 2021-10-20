
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { RelativeTypeService } from './relativeType.service';
import { RelativeTypeServiceCollection } from './relativeType.service.collection';

import { RelativeTypeIndexUI } from './index/relativeType.index';
import { RelativeType_ModuleFunc } from './relativeType.module.func';
import { RelativeType_ModuleMaster } from './relativeType.module.master';


import { Relative_ModuleFunc } from '../../HR/Relative/relative.module.func';
import { Relative_ModuleMaster } from '../../HR/Relative/relative.module.master';

@NgModule({
  declarations: [
    RelativeTypeIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    RelativeType_ModuleMaster,
		Relative_ModuleMaster,
  ],
  exports: [
    RelativeTypeIndexUI,
		RelativeType_ModuleMaster,
   ]
})
export class RelativeTypeModule {}