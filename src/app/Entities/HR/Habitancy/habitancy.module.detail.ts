import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { HabitancyService } from './habitancy.service';
import { HabitancyServiceCollection } from './habitancy.service.collection';



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
    //HabitancyService,
    //HabitancyServiceCollection
  ]
})
export class Habitancy_ModuleDetail { }