import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { CertificationTypeService } from './certificationType.service';
import { CertificationTypeServiceCollection } from './certificationType.service.collection';


import { CertificationType_UniversityHistory_DetailUI } from './detail/certificationType-universityHistory.detail';
import { UniversityHistory_ModuleMaster } from '../../HR/UniversityHistory/universityHistory.module.master';

@NgModule({
  declarations: [
    CertificationType_UniversityHistory_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		UniversityHistory_ModuleMaster,
  ],
  exports: [
    CertificationType_UniversityHistory_DetailUI
  ],
  providers: [
    //CertificationTypeService,
    //CertificationTypeServiceCollection
  ]
})
export class CertificationType_ModuleDetail { }