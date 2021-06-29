import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ConfigQualitativeKPIService } from './configQualitativeKPI.service';
import { ConfigQualitativeKPIServiceCollection } from './configQualitativeKPI.service.collection';



@NgModule({
  declarations: [
    // No Item...
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    // No Item...
  ],
  providers: [
    //ConfigQualitativeKPIService,
    //ConfigQualitativeKPIServiceCollection
  ]
})
export class ConfigQualitativeKPI_ModuleDetail { }