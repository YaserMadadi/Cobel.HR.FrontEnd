import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QualitativeObjectiveService } from './qualitativeObjective.service';
import { QualitativeObjectiveServiceCollection } from './qualitativeObjective.service.collection';


import { QualitativeObjective_QualitativeKPI_DetailUI } from './detail/qualitativeObjective-qualitativeKPI.detail';
import { QualitativeKPI_ModuleMaster } from '../QualitativeKPI/qualitativeKPI.module.master';

@NgModule({
  declarations: [
    QualitativeObjective_QualitativeKPI_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		QualitativeKPI_ModuleMaster,
  ],
  exports: [
    QualitativeObjective_QualitativeKPI_DetailUI
  ],
  
})
export class QualitativeObjective_ModuleDetail { }