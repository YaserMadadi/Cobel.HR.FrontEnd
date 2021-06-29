import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { QualitativeKPIService } from './qualitativeKPI.service';
import { QualitativeKPIServiceCollection } from './qualitativeKPI.service.collection';


import { QualitativeKPI_QualitativeAppraise_DetailUI } from './detail/qualitativeKPI-qualitativeAppraise.detail';
import { QualitativeAppraise_ModuleMaster } from '../QualitativeAppraise/qualitativeAppraise.module.master';

@NgModule({
  declarations: [
    QualitativeKPI_QualitativeAppraise_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		QualitativeAppraise_ModuleMaster,
  ],
  exports: [
    QualitativeKPI_QualitativeAppraise_DetailUI
  ],
  providers: [
    //QualitativeKPIService,
    //QualitativeKPIServiceCollection
  ]
})
export class QualitativeKPI_ModuleDetail { }