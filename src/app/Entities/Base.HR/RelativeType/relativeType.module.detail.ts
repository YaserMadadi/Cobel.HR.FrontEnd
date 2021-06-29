import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { RelativeTypeService } from './relativeType.service';
import { RelativeTypeServiceCollection } from './relativeType.service.collection';


import { RelationType_Relative_DetailUI } from './detail/relationType-relative.detail';
import { Relative_ModuleMaster } from '../../HR/Relative/relative.module.master';

@NgModule({
  declarations: [
    RelationType_Relative_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Relative_ModuleMaster,
  ],
  exports: [
    RelationType_Relative_DetailUI
  ],
  providers: [
    //RelativeTypeService,
    //RelativeTypeServiceCollection
  ]
})
export class RelativeType_ModuleDetail { }