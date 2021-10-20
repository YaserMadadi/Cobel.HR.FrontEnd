import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { ProvinceService } from './province.service';
import { ProvinceServiceCollection } from './province.service.collection';

import { ProvinceIndexUI } from './index/province.index';
import { Province_ModuleFunc } from './province.module.func';
import { Province_ModuleMaster } from './province.module.master';


import { City_ModuleFunc } from '../City/city.module.func';
import { City_ModuleMaster } from '../City/city.module.master';

@NgModule({
  declarations: [
    ProvinceIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Province_ModuleMaster,
		City_ModuleMaster,
  ],
  exports: [
    ProvinceIndexUI,
		Province_ModuleMaster,
   ]
})
export class ProvinceModule {}