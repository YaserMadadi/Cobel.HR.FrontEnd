import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { MaritalStatusService } from './maritalStatus.service';
import { MaritalStatusServiceCollection } from './maritalStatus.service.collection';


import { MaritalStatus_Person_DetailUI } from './detail/maritalStatus-person.detail';
import { Person_ModuleMaster } from '../../HR/Person/person.module.master';

@NgModule({
  declarations: [
    MaritalStatus_Person_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Person_ModuleMaster,
  ],
  exports: [
    MaritalStatus_Person_DetailUI
  ],
  providers: [
    //MaritalStatusService,
    //MaritalStatusServiceCollection
  ]
})
export class MaritalStatus_ModuleDetail { }