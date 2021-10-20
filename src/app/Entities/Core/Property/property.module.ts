import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { PropertyService } from './property.service';
import { PropertyServiceCollection } from './property.service.collection';

import { PropertyIndexUI } from './index/property.index';
import { Property_ModuleFunc } from './property.module.func';
import { Property_ModuleMaster } from './property.module.master';


import { PropertyOption_ModuleFunc } from '../PropertyOption/propertyOption.module.func';
import { PropertyOption_ModuleMaster } from '../PropertyOption/propertyOption.module.master';

@NgModule({
  declarations: [
    PropertyIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Property_ModuleMaster,
		PropertyOption_ModuleMaster,
  ],
  exports: [
    PropertyIndexUI,
		Property_ModuleMaster,
   ]
})
export class PropertyModule {}