import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { EmployeeDetailService } from './employeeDetail.service';
import { EmployeeDetailServiceCollection } from './employeeDetail.service.collection';

import { EmployeeDetailIndexUI } from './index/employeeDetail.index';
import { EmployeeDetail_ModuleFunc } from './employeeDetail.module.func';
import { EmployeeDetail_ModuleMaster } from './employeeDetail.module.master';



@NgModule({
  declarations: [
    EmployeeDetailIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    EmployeeDetail_ModuleMaster,
  ],
  exports: [
    EmployeeDetailIndexUI,
		EmployeeDetail_ModuleMaster,
  ],
  providers: [
    // EmployeeDetailService,
    // EmployeeDetailServiceCollection
  ]
})
export class EmployeeDetailModule {}