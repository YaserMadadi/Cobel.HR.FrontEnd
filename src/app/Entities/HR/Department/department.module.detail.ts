import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { DepartmentService } from './department.service';
import { DepartmentServiceCollection } from './department.service.collection';


import { Department_Unit_DetailUI } from './detail/department-unit.detail';
import { Unit_ModuleMaster } from '../Unit/unit.module.master';

@NgModule({
  declarations: [
    Department_Unit_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		Unit_ModuleMaster,
  ],
  exports: [
    Department_Unit_DetailUI
  ],
  providers: [
    //DepartmentService,
    //DepartmentServiceCollection
  ]
})
export class Department_ModuleDetail { }