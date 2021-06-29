import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { StrategicObjectveService } from './strategicObjectve.service';
import { StrategicObjectveServiceCollection } from './strategicObjectve.service.collection';



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
    //StrategicObjectveService,
    //StrategicObjectveServiceCollection
  ]
})
export class StrategicObjectve_ModuleDetail { }