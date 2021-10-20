import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ObjectiveWeightNonOperationalService } from './objectiveWeightNonOperational.service';
import { ObjectiveWeightNonOperationalServiceCollection } from './objectiveWeightNonOperational.service.collection';



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
  
})
export class ObjectiveWeightNonOperational_ModuleDetail { }