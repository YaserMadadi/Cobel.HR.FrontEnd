import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { DepartmentMasterUI } from '../master/department.master';
import { DepartmentEditUI } from '../edit/department.edit';
import { DepartmentDeleteUI } from '../delete/department.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { UnitEditUI } from '../../Unit/edit/unit.edit';
import { Unit } from '../../Unit/unit';



@Component({
  selector: 'hr-department-index',
  templateUrl: './department.index.html',
  styleUrls: ['./department.index.css']
})
export class DepartmentIndexUI extends IndexView<Department> implements AfterViewInit, IIndexView<Department> {

  constructor(private departmentService: DepartmentService) {
    super(departmentService);
    this.filterInstance = Department.SeekInstance();
    this.currentInstance = new Department();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Unit

  public unit_Clicked(unitEditUI: UnitEditUI) {
    unitEditUI.Department = this.currentInstance;
    unitEditUI.ShowDialog(new Unit());
  }
                    
  public unitEditUI_Closed(unit: Unit) {
    if (!unit)
      return;
    this.onRefresh();
  }
  
  //#endregion Unit


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(departmentEditUI: DepartmentEditUI){
    departmentEditUI.ShowDialog(new Department());
  }

  resetFilter() {
    this.filterInstance = Department.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(department: Department) {
    this.onRefresh();
    this.currentInstance = new Department();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}