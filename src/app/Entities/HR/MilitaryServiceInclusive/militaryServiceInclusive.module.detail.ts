import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MilitaryServiceInclusiveService } from './militaryServiceInclusive.service';
import { MilitaryServiceInclusiveServiceCollection } from './militaryServiceInclusive.service.collection';



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
    //MilitaryServiceInclusiveService,
    //MilitaryServiceInclusiveServiceCollection
  ]
})
export class MilitaryServiceInclusive_ModuleDetail { }