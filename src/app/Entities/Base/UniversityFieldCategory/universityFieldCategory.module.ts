import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { UniversityFieldCategoryService } from './universityFieldCategory.service';
import { UniversityFieldCategoryServiceCollection } from './universityFieldCategory.service.collection';

import { UniversityFieldCategoryIndexUI } from './index/universityFieldCategory.index';
import { UniversityFieldCategory_ModuleFunc } from './universityFieldCategory.module.func';
import { UniversityFieldCategory_ModuleMaster } from './universityFieldCategory.module.master';


import { FieldOfStudy_ModuleFunc } from '../FieldOfStudy/fieldOfStudy.module.func';
import { FieldOfStudy_ModuleMaster } from '../FieldOfStudy/fieldOfStudy.module.master';

@NgModule({
  declarations: [
    UniversityFieldCategoryIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    UniversityFieldCategory_ModuleMaster,
		FieldOfStudy_ModuleMaster,
  ],
  exports: [
    UniversityFieldCategoryIndexUI,
		UniversityFieldCategory_ModuleMaster,
   ]
})
export class UniversityFieldCategoryModule {}