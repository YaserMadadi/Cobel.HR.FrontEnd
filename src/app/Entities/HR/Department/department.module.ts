import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { DepartmentService } from './department.service';
import { DepartmentServiceCollection } from './department.service.collection';

import { DepartmentIndexUI } from './index/department.index';
import { Department_ModuleFunc } from './department.module.func';
import { Department_ModuleMaster } from './department.module.master';


import { Unit_ModuleFunc } from '../Unit/unit.module.func';
import { Unit_ModuleMaster } from '../Unit/unit.module.master';

@NgModule({
  declarations: [
    DepartmentIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Department_ModuleMaster,
		Unit_ModuleMaster,
  ],
  exports: [
    DepartmentIndexUI,
		Department_ModuleMaster,
  ],
  providers: [
    // DepartmentService,
    // DepartmentServiceCollection
  ]
})
export class DepartmentModule {}