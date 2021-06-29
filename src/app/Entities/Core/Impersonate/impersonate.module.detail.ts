import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { ImpersonateService } from './impersonate.service';
import { ImpersonateServiceCollection } from './impersonate.service.collection';



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
    //ImpersonateService,
    //ImpersonateServiceCollection
  ]
})
export class Impersonate_ModuleDetail { }