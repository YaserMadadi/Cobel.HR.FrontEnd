import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PropertyOptionService } from './propertyOption.service';
import { PropertyOptionServiceCollection } from './propertyOption.service.collection';

import { PropertyOptionIndexUI } from './index/propertyOption.index';
import { PropertyOption_ModuleFunc } from './propertyOption.module.func';
import { PropertyOption_ModuleMaster } from './propertyOption.module.master';



@NgModule({
  declarations: [
    PropertyOptionIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    PropertyOption_ModuleMaster,
  ],
  exports: [
    PropertyOptionIndexUI,
		PropertyOption_ModuleMaster,
  ],
  providers: [
    // PropertyOptionService,
    // PropertyOptionServiceCollection
  ]
})
export class PropertyOptionModule {}