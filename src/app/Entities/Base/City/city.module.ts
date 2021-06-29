import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CityService } from './city.service';
import { CityServiceCollection } from './city.service.collection';

import { CityIndexUI } from './index/city.index';
import { City_ModuleFunc } from './city.module.func';
import { City_ModuleMaster } from './city.module.master';


import { Habitancy_ModuleFunc } from '../../HR/Habitancy/habitancy.module.func';
import { Habitancy_ModuleMaster } from '../../HR/Habitancy/habitancy.module.master';
import { Person_ModuleFunc } from '../../HR/Person/person.module.func';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';
import { University_ModuleFunc } from '../University/university.module.func';
import { University_ModuleMaster } from '../University/university.module.master';

@NgModule({
  declarations: [
    CityIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    City_ModuleMaster,
		Habitancy_ModuleMaster,
		Person_ModuleMaster,
		University_ModuleMaster,
  ],
  exports: [
    CityIndexUI,
		City_ModuleMaster,
  ],
  providers: [
    // CityService,
    // CityServiceCollection
  ]
})
export class CityModule {}