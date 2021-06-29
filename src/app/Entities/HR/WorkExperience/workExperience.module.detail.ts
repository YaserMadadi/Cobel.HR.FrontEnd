import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { WorkExperienceService } from './workExperience.service';
import { WorkExperienceServiceCollection } from './workExperience.service.collection';



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
    //WorkExperienceService,
    //WorkExperienceServiceCollection
  ]
})
export class WorkExperience_ModuleDetail { }