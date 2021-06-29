import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { FieldCategoryService } from './fieldCategory.service';
import { FieldCategoryServiceCollection } from './fieldCategory.service.collection';

import { FieldCategoryIndexUI } from './index/fieldCategory.index';
import { FieldCategory_ModuleFunc } from './fieldCategory.module.func';
import { FieldCategory_ModuleMaster } from './fieldCategory.module.master';


import { PersonCertificate_ModuleFunc } from '../../HR/PersonCertificate/personCertificate.module.func';
import { PersonCertificate_ModuleMaster } from '../../HR/PersonCertificate/personCertificate.module.master';

@NgModule({
  declarations: [
    FieldCategoryIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    FieldCategory_ModuleMaster,
		PersonCertificate_ModuleMaster,
  ],
  exports: [
    FieldCategoryIndexUI,
		FieldCategory_ModuleMaster,
  ],
  providers: [
    // FieldCategoryService,
    // FieldCategoryServiceCollection
  ]
})
export class FieldCategoryModule {}