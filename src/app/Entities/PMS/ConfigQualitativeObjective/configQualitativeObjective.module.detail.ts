import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ConfigQualitativeObjectiveService } from './configQualitativeObjective.service';
import { ConfigQualitativeObjectiveServiceCollection } from './configQualitativeObjective.service.collection';


import { QualitativeObjectiveConfig_ConfigQualitativeKPI_DetailUI } from './detail/qualitativeObjectiveConfig-configQualitativeKPI.detail';
import { ConfigQualitativeKPI_ModuleMaster } from '../ConfigQualitativeKPI/configQualitativeKPI.module.master';

@NgModule({
  declarations: [
    QualitativeObjectiveConfig_ConfigQualitativeKPI_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		ConfigQualitativeKPI_ModuleMaster,
  ],
  exports: [
    QualitativeObjectiveConfig_ConfigQualitativeKPI_DetailUI
  ],
  providers: [
    //ConfigQualitativeObjectiveService,
    //ConfigQualitativeObjectiveServiceCollection
  ]
})
export class ConfigQualitativeObjective_ModuleDetail { }