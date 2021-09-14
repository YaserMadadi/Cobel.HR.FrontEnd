import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { CountryService } from './country.service';
import { CountryServiceCollection } from './country.service.collection';

import { CountryIndexUI } from './index/country.index';
import { Country_ModuleFunc } from './country.module.func';
import { Country_ModuleMaster } from './country.module.master';


import { Person_ModuleFunc } from '../../HR/Person/person.module.func';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';

@NgModule({
  declarations: [
    CountryIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Country_ModuleMaster,
		Person_ModuleMaster,
  ],
  exports: [
    CountryIndexUI,
		Country_ModuleMaster,
   ]
})
export class CountryModule {}