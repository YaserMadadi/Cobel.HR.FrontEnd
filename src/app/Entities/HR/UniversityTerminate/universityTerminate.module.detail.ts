import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { UniversityTerminateService } from './universityTerminate.service';
import { UniversityTerminateServiceCollection } from './universityTerminate.service.collection';



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
    //UniversityTerminateService,
    //UniversityTerminateServiceCollection
  ]
})
export class UniversityTerminate_ModuleDetail { }