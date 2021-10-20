import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AppraisalApproverConfigService } from './appraisalApproverConfig.service';
import { AppraisalApproverConfigServiceCollection } from './appraisalApproverConfig.service.collection';



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
export class AppraisalApproverConfig_ModuleDetail { }