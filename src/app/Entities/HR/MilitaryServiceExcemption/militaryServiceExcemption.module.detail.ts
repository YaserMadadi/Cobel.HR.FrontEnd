import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MilitaryServiceExcemptionService } from './militaryServiceExcemption.service';
import { MilitaryServiceExcemptionServiceCollection } from './militaryServiceExcemption.service.collection';



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
export class MilitaryServiceExcemption_ModuleDetail { }